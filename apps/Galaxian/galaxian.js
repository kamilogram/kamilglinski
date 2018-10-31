        // Wzi�te z szablonu:
        var ctxMain = null;
        var canvasBuffer;
        var ctx = null;
        var width = 0;
        var height = 0;

        //Zmienne globalne
        var odlegloscX = 60;        //przerwa pomi�dzy statkami w poziomie
        var odlegloscY = 23;        //przerwa pomi�dzy statkami w pionie
        var odlegloscOdSrodka = 0;  //zmienna pozwalaj�ca przesuwa� statki w poziomie
        var kierunek = 1;           //kierunek przesuwania statk�w w poziomie

        var czas = 0;               //globalny czas gry
        var zycie = 2;              //ilo�� rezerwowych �y�
        var plansza = 1;            //poziom
        var punkty = 0;
        var czestAtaku = 150;       //cz�sto�� z jak� wylatuje z szeregu statek
        var czestStrzalu = 250;     //cz�sto��, z jak� lecacy statek strzela

        var ileStatkow = 0;         //suma wszystkich obcych statk�w  (potrzebn� so stwierdzenia, czy ju� wszystkie s� zestrzelone a wi�c czy nie czas na now� plansz�)
        var czyTrafiony = 0;        //czy trafiony m�j statek - 0 oznacza �e nie trafiony, inna warto�� - czas trafienia

        var doPobrania = 0;         //liczba element�w do pobrania

        var StartGry = false;
        var GameOver = false;

        //elementy graficzne
        var gwiazdy, mojStatek, mojStatekMaly, laser, statek, statek2, statek3, statek25, wybuchMaly, wybuchDuzy, chorogiew, galaxian;

        //instancje obiekt�w
        var MojStatek;
        var Pocisk;

        //struktura danych (tablica dwuwymiarowa -> 1 wymiar: kolumny, 2 wymiar: statki w rz�dzie
        var StatkiKosm = new Array(7);
        for (var i = 0; i < StatkiKosm.length; i++) {
            StatkiKosm[i] = new Array();
        }


        //Z szablonu: funckja wykonywana JEDEN RAZ przy starcie gry:

        //po uruchomieniu strony wykonaj:
        window.addEventListener("load", function () {
            // Sprawd�, czy przegl�darka obs�uguje element Canvas
            var canvas = document.getElementById('gra');
            if (!canvas.getContext) { return; }
            ctxMain = canvas.getContext('2d');
            width = canvas.width;
            console.log("width: ", width);
            height = canvas.height;
            // Dodaj bufor dla elementu canvas
            canvasBuffer = document.createElement('canvas');
            canvasBuffer.width = width;
            canvasBuffer.height = height;
            ctx = canvasBuffer.getContext('2d');

        // Funkcje dodane osobi�cie (koniec szablonu):

            LadujDane();
            RozpocznijTworzenieStatkow();
            StworzMojStatek();
            StworzPocisk();

            document.addEventListener("keydown", KeyDown, false);   // Nas�uchiwanie  klawiatury

        }, false);


        // Funkcje pobieraj�ce obrazki
        function LadujDane() {
            gwiazdy = LadujObrazek('Images/gwiazdy.png');
            mojStatek = LadujObrazek('Images/mojStatek.png');
            mojStatekMaly = LadujObrazek('Images/mojStatekMaly.png');
            laser = LadujObrazek('Images/pocisk.png');
            statek = LadujObrazek('Images/statek.png');
            statek2 = LadujObrazek('Images/statek2.png');
            statek3 = LadujObrazek('Images/statek3.png');
            statek25 = LadujObrazek('Images/statek25.png');
            wybuchMaly = LadujObrazek('Images/wybuch1.png');
            wybuchDuzy = LadujObrazek('Images/wybuch2.png');
            choragiew = LadujObrazek('Images/flag.png');
            galaxian = LadujObrazek('Images/napis.png');
            setTimeout(SprawdzZaladowanie, 100);
        }

        function LadujObrazek(path) {           //te� z szablonu
            doPobrania++;
            var v = new Image();
            v.src = path;
            v.addEventListener("load", function () { doPobrania--; }, false);
            return v;
        }

        function SprawdzZaladowanie() {           //te� z szablonu
            if (doPobrania == 0) {
                setInterval(RysujPlanszeGry, 1000 / 30);            //30 to cz�stotliwo�� od�nie�ania - mniejsza warto��
                                                                    // - wolniejsza gra
            }
            else {
                setTimeout(SprawdzZaladowanie, 100);
            }
        }

        //Funkcje tworz�ce obiekty obiekty (u�yte podczas uruchamiania strony)
        function RozpocznijTworzenieStatkow() {
            StworzStatki(statek, 4, 1, 4, 1000);         //w 1 linijce 6 statk�w typu statek
            StworzStatki(statek2, 6, 2, 3, 800);        //w 2 linijce 8 statk�w typu statek2
            StworzStatki(statek25, 8, 3, 2, 500);        //w 2 linijce 8 statk�w typu statek2
            for (var i = 0; i < 3; i++) {
                StworzStatki(statek3, 10, 4 + i, 1, 200);   //w trzech kolejnych po 10 statk�w typu statek3
            }
        }

        function StworzStatki(jaki, ile, wKtorejLinii, sila, wartosc) {
            var x;
            for (var j = 0; j < ile; j++) {
                x = (width / 2) + (-ile / 2 + j) * odlegloscX  //algorytm obliczaj�cy po�o�enie x tak aby u�o�y� statki r�wnomiernie wzgl�dem �rodka ekranu w zale�no�ci od ilo�ci statk�w w danym rz�dzie
                StatkiKosm[wKtorejLinii].push(new StatekKosm(jaki, x, wKtorejLinii * odlegloscY + 100, sila, wartosc));    //dodawanie statku do struktury danych
                ileStatkow++;
            }
        }

        function StworzMojStatek() {
            MojStatek = new StatekKosm(mojStatek, width / 2 - 43, height-76, 0, 0);
        }

        function StworzPocisk() {
            Pocisk = new Strzal(MojStatek.X + 24, 732, 0);       //tworzy obiekt pocisku typu laser
        }



        // Funkcja rysuj�ca plansz� gry (od�wie�ana systematycznie)
        function RysujPlanszeGry() {
            ctx.clearRect(0, 0, width, height);
            ctx.fillRect(0, 0, width, height);
            ctx.drawImage(gwiazdy, 0, 0 + (czas * 2 % height));             //jedno z t�a - jak dojdzie do do�u, rysowane od nowa
            ctx.drawImage(gwiazdy, 0, -height + (czas * 2 % height));       //drugie - rysowane powy�ej pierwszego, aby nie by�o nad nim bialego pola

            if (StartGry == false) StronaStartowa();
            else if (GameOver == true) KoniecGry();

            else {                              //je�eli ju� sie nie wy�wietla strona startowa a jeszcze nie ma game over - ca�e sedno gry
                Poruszaj();                     //wylicza ca�y czas kierunek poruszania si� w poziomie obcych statk�w
                if (czyTrafiony == 0) MojStatek.Rysuj();        //jesli m�j statek nie jest trafiony, rysuj go
                else {
                    RysujWybuch(czyTrafiony);                   //je�eli jest, rysuj wybuch (od momentu trafienia)
                    if (czas == czyTrafiony + 120) PrzywrocZycie();     //a po chwili...
                }
                RuszajStatkami();
                RuszajStrzalamiWroga();
                RuszajPociskiem();
                SprawdzajKolizje();
                WyswietlajNapisy();
                Atakuj();                                       //funkcja pozwalalj�ca atakowa� co jaki� czas wrogim statkom
                if (ileStatkow == 0) NowaPlansza();
                czas++;
            }
            ctxMain.drawImage(canvasBuffer, 0, 0);
        }

        //funkcja odpowiedzialna za strone tytu�owa gry
        function StronaStartowa() {
            ctx.drawImage(galaxian, 120, 150);
            ctx.fillStyle = 'rgb(255,230,50)';
            ctx.font = "2.5em calibri";
            ctx.fillText("Start:", 430, 460);
            ctx.fillText("SPACJA", 420, 480);
            WyswietlajNapisy();
        }

        //funkcja wyswietlajaca g�rne napisy
        function WyswietlajNapisy() {
            ctx.fillStyle = 'rgb(255,30,0)';
            ctx.font = "2.5em calibri";
            ctx.fillText("SCORE:", 350, 50);
            ctx.fillText(punkty, 450, 50);
            for (var i = 0; i < zycie; i++) {
                ctx.drawImage(mojStatekMaly, 600 + mojStatekMaly.width * i * 1.1, 20);
            }
            for (var i = 0; i < plansza; i++) {
                ctx.drawImage(choragiew, 800 + choragiew.width * i * 1.1, 30);
            }
        }

        //funkcja obliczaj�ca po�o�enie wszystkich nieatakujacych lub wracajacych statk�w wzgl�dem ekranu (w poziomie)
        function Poruszaj() {
            //'odlegloscOdSrodka' sprawdza, czy ju� nie "zawr�ci�" wrogich statk�w - na pocz�tku ma warto�� 0
            //'kierunek' okre�la czy w prawo (1) czy  wlewo (-1)
            if (odlegloscOdSrodka == 50) kierunek = -1;     //jak 'odlegloscOdSrodka' osi�gnie maksimum z prawej strony (tu: 50) - zmie� kierunek na przeciwny
            else if (odlegloscOdSrodka == -50) kierunek = 1;    //     -----||------
            odlegloscOdSrodka += kierunek;                  //modyfikuje 'odlegloscOdSrodka' zgodnie z kierunkiem
        }

        function RysujWybuch(t) {
            if (czas - t < 8) ctx.drawImage(wybuchMaly, MojStatek.X, MojStatek.Y);
            else if (czas - t < 16) ctx.drawImage(wybuchDuzy, MojStatek.X - 20, MojStatek.Y - 20);
            else if (czas - t < 24) ctx.drawImage(wybuchMaly, MojStatek.X, MojStatek.Y);
        }

        var PrzywrocZycie = function () {
            if (zycie > 0) {            //dop�ki jest co przywraca�
                zycie--;
                document.addEventListener("keydown", KeyDown, false);   //przywr�c reagowanie na naciskanie klawiszy (wy��czone przy wybuchu)
                czyTrafiony = 0;            // 0  spowrotem oznacza, �e m�j statek nie jest trafiony
            }
            else GameOver = true;
        }

        function RuszajStatkami() {
            for (j in StatkiKosm) {
                for (i in StatkiKosm[j]) {
                    StatkiKosm[j][i].Rysuj();
                    StatkiKosm[j][i].PrzesuwajPoziomo();
                    StatkiKosm[j][i].Lec();
                }
            }
        }

        function RuszajStrzalamiWroga() {
            for (i in strzaly) {
                strzaly[i].Poruszaj();
                strzaly[i].Rysuj();
            }
        }

        function RuszajPociskiem() {
            if (Pocisk.CzyWystrzelony == true) Pocisk.Y -= 20;
            if (czyTrafiony == 0) Pocisk.Rysuj();   //dop�ki (lub je�eli) m�j statek nie jest trafiony, rysuj pocisk
            if (Pocisk.Y < 0) StworzPocisk();       //jak pocisk wyjdzie poza ekran, tworzy nowy pocisk
        }

        function SprawdzajKolizje() {
            for (j in StatkiKosm) {
                for (i in StatkiKosm[j]) {

                    // Sprawdza, czy m�j pocisk trafi� kt�ry� wrogi statek - por�wnuj�c wsp��rz�dne ka�dego statku ze wsp��rz�dnymi pocisku
                    if ((Math.abs(StatkiKosm[j][i].X + 15 - Pocisk.X) < 15) && (Math.abs(StatkiKosm[j][i].Y - Pocisk.Y) < 13) && Pocisk.CzyWystrzelony == true) {
                        //(15 to po�owa szeroko�ci statku, dlatego do .....[j][i].X, kt�ry oznacza lewy r�g statku trzeba te 15 doda�; abs to warto�� bezwzgl�dna)
                        punkty += StatkiKosm[j][i].Wartosc;
                        StatkiKosm[j].splice(i, 1);     //usuwa konkretny trafiony statek ze struktury
                        StworzPocisk();                 //i tworzy nowy pocisk zamiast tamtego, kt�ry trafi�
                        ileStatkow--;                   //zmniejsza informacj� o ilosci statkow
                    }

                    // Sprawdza, czy kt�ry� wrogi statek nie wpad� na m�j - por�wnuj�c wsp��rz�dne ka�dego statku ze wsp��rz�dnymi mojego statku
                    if ((Math.abs(StatkiKosm[j][i].X + 5 - MojStatek.X) < 30) && (Math.abs(StatkiKosm[j][i].Y - MojStatek.Y) < 14) && czyTrafiony == 0) {
                        StatkiKosm[j].splice(i, 1);
                        Skusil();           //rozpoczyna ci�g zdarze� wywo�anych zniszczeniem mojego statku
                        ileStatkow--;       //zmniejsza informacj� o ilosci statkow
                    }
                }
            }

            // Sprawdza, czy kt�ry� pocisk wrogiego statku nie trafi� w m�j statek - por�wnuj�c wsp��rz�dne ka�dego pocisku ze wsp��rz�dnymi mojego statku
            for (i in strzaly) {
                if ((Math.abs(MojStatek.X + 23 - strzaly[i].X) < 20) && (Math.abs(MojStatek.Y + 8 - strzaly[i].Y) < 25) && czyTrafiony == 0) {
                    strzaly.splice(i, 1);     //usuwa konkretny trafinony statek ze struktury
                    Skusil();               //rozpoczyna ci�g zdarze� wywo�anych zniszczeniem mojego statku
                }
            }
        }

        //funkcja wykonywania przy zniszczeniu mojego statku
        var Skusil = function () {
            czyTrafiony = czas;             //zapisuje czas trafienia, wzgl�dem kt�rego jest odmierzany wybuch i przywrocenie �ycia
            document.removeEventListener("keydown", KeyDown, false);        //wy�acza klawiatur� (�eby wybuch nie m�g� strzela�)
        }

        //funkcja umo�liwoajaca wylatywanie statk�w z szeregu
        function Atakuj() {
            if (czas % czestAtaku == czestAtaku - 1 && czyTrafiony == 0) {      //wylatuj raz na jaki� czas (z cz�stotl.=czestAtaku) i tylko, gdy m�j statek akurat istnieje
                var losowaY = Math.ceil(Math.random() * 6);                     //losuje z kt�rego wiersza ma wylecie�
                var zKtorejStr = (Math.round(Math.random()) == 1 ? 1 : -1);     //losuje czy wylecie� pierwszy z prawej czy pierwszy z lewej
                var ten = (zKtorejStr == 1 ? StatkiKosm[losowaY].length - 1 : 0);   //zmienna ktora pozwala wskaza� w tablicy o ktory statek chodzi
                StatkiKosm[losowaY][ten].Wystartuj(zKtorejStr);
                if (losowaY == 1) {                           //je�eli ma wystartowa� statek z pierwszego wiersza, startuje z dwoma z drugiego
                    if (StatkiKosm[losowaY + 1][ten] != null) StatkiKosm[losowaY + 1][ten].Wystartuj(zKtorejStr);
                    if (StatkiKosm[losowaY + 1][ten + 1] != null) StatkiKosm[losowaY + 1][ten + 1].Wystartuj(zKtorejStr);
                }
            }
        }

        //funkcja tworz�ca now� plansz� po trafieniu wszystkich wrogich statk�w
        var NowaPlansza = function () {
            RozpocznijTworzenieStatkow();
            StworzMojStatek();
            StworzPocisk();
            plansza++;                                      //zmienna wykorzystywana do malowania ilosci flag na g�rze
            czestAtaku = Math.round(czestAtaku * 0.7);      //zwi�ksza cz�stotl. wylatywania wrogich statk�w
            czestStrzalu = Math.round(czestStrzalu * 0.7);  //zwieksza cz�stotl. strzelania latajacego statku
        }

        //strona wy�wietlana na koniec gry
        var KoniecGry = function () {
            ctx.clearRect(0, 0, width, height);
            ctx.fillRect(0, 0, width, height);
            ctx.drawImage(gwiazdy, 0, 0);
            ctx.fillStyle = 'rgb(255,230,50)';
            ctx.font = "2.5em calibri";
            ctx.fillText("GAME OVER", width / 2 - 60, height / 2);
            WyswietlajNapisy();
            ctxMain.drawImage(canvasBuffer, 0, 0);
        }





        //obiekt (jakikolwiek statek)
        var StatekKosm = function (jaki, x, y, sila, wartosc) {
            this.Jaki = jaki;               //jaki obrazek
            this.X = x;
            this.Y = y;
            this.Xstartowy = x;             //wsp��rz. okre�laj�ce pozycj�, gdyby statek nie wylecia�
            this.Ystartowy = y;             //... (potrzebne by wr�ci� na wla�ciwe miejsce)
            this.Argument = 0;              //argument sinusa i cosinusa przy locie wstron� mojego statku
            this.StartX = 0;                //wsp. X wrogiego statku, w chwili obliczania trajektorii
            this.StartXG = 0;               //wsp. X mojego statku w chwili obliczania trajektorii (G = gracz)
            this.ponizej0 = false;          //czy wrogi statek wylecia� ponizej ekranu
            this.powrot = false;            //czy w�a�nie nie wraca na miejsce (wtedy ma nie strzela�)
            this.czasStartu = 0;            //licznik uruchamiany w momencie wylotu, potrzebny do chwili strzelania
            this.DXstrzal = 0;              //pr�dkos�, z jak� porusza si� w locie (wzgledem X-sa, bo Y jest sta�y)
            this.Sila = sila;               //ile strza��w mo�e odda� naraz
            this.Wartosc = wartosc;         //ile punkt�w za jego zastrzelenie
            this.czyAtakuje = false;

            this.PrzesuwajPoziomo = function () {
                this.Xstartowy += (2 * kierunek);                           //przesuwaj miejsce, do kt�rego ma wr�ci�
                if (this.czyAtakuje == false) this.X = this.Xstartowy;      //przesuwaj, je�li nie atakuje
            }

            this.Wystartuj = function (strona) {
                this.czyAtakuje = true;
                this.S = strona;            //strona, w kt�ra ma wylatywa� (czy w prawo, czy w lewo)
            }

            this.Strzelaj = function () {
                strzaly.push(new Strzal(this.X + 8, this.Y + 25, this.DXstrzal));
            }

            this.Lec = function () {
                if (this.czyAtakuje == true) {
                    if (this.ponizej0 == false) {
                        if (this.Argument < 90) this.Start();           //pierwsza faza lotu - wylot z szeregu
                        else if ((this.Argument + 90) % 180 == 0) this.Ustaw(this.X, MojStatek.X);  //kolejne fazy, +90 wynika z wla�ciwo�ci tryg.
                        else this.Celuj();
                    }
                    else {
                        this.Wroc();        //jak wyleci poni�ej ekranu
                    }

                    if (this.powrot == false && this.Y < 3 * height / 4) {  //je�eli jeszcze leci i nie jest za nisko, zeby strzela�
                        for (var i = 0; i < this.Sila; i++) {       //przygotuj tyle strza�, ile masz w zale�n. od rodzaju statku
                            if (this.czasStartu % czestStrzalu == (25 + 5 * i)) this.Strzelaj(); //zacznij strzela� po czasie 25 od wylotu
                        }
                    }
                    this.czasStartu++;      //iteruje licznik
                }
            }

            //pierwsza faza lotu - po jednej czwartej okr�gu
            this.Start = function () {
                this.X += 6 * Math.cos(this.Argument * Math.PI / 180) * this.S;     //6 to promie�, S - zgodnie ze wskazowk, czy nie
                this.Y += 6 * Math.sin(this.Argument * Math.PI / 180);
                this.Argument += 5;     //iteruje argument funkcji tryg.
            }

            //funkcja obliczajaca dalsza trajektori� - uzywana przy ka�dym ekstremum
            this.Ustaw = function (iksS, iksG) {
                this.StartX = iksS;            //potrzebne do okre�lenia predkosci w X kierowania si� w stron� mojego statku
                this.StartXG = iksG;            // ---||---
                this.dX = (this.StartX - this.StartXG) * 4 / 5;     //predkos�; 4/5 - pomaga w kazdym kroku zbli�ac si� do mojego statku
                                                    //...bo w przeciwfazie osiaga tylko 4/5 odleg�osci startowej
                this.Argument = 95;         //wraca cyklicznie do ekstremum
                this.tempX = this.X;        //potrzebne do nadania pociskom odpowiedni kierunek zale�ny od szybko�ci
            }

            //funkcja nakierowujaca obcy statek po t�umionej sinusoidzie
            this.Celuj = function () {
                this.DXstrzal = this.X - this.tempX;        //kierunek pocisku
                this.tempX = this.X;
                this.X = this.StartX - (Math.cos((this.Argument + 90) * Math.PI / 180) + 1) * this.dX;  //+90 oraz +1 wynika z w�. tryg.
                this.Y += 3;
                this.Argument += 5;             //iteruje argument funkcji tryg.
                if (this.Y > height) this.UstawPowrot();        //jak wyleci poni�ej ekranu
            }

            this.UstawPowrot = function () {
                this.X = this.Xstartowy;
                this.Y = 0;
                this.ponizej0 = true;
            }

            this.Wroc = function () {
                this.X = this.Xstartowy;
                this.powrot = true;
                this.Y += 3;
                if (this.Y > this.Ystartowy - 3) {      //jak ju� b�dzie na swoim miejscu
                    this.ponizej0 = false;
                    this.powrot = false;
                    this.X = this.Xstartowy;
                    this.Y = this.Ystartowy;
                    this.czyAtakuje = false;
                    this.Argument = 0;
                }
            }

            this.Rysuj = function () {
                ctx.drawImage(this.Jaki, this.X, this.Y);
            }
        }

        //strza�y (jakiekolwiek)
        var strzaly = new Array();
        var Strzal = function (x, y, dxStrzal) {
            this.X = x;
            this.Y = y;
            this.DX = dxStrzal;
            this.CzyWystrzelony = false;

            this.Rysuj = function () {
                ctx.drawImage(laser, this.X, this.Y);
            }

            this.Poruszaj = function () {
                this.X += this.DX / 3;              //dzielnik 3, �eby pocisk za szybko nie lecia� w poziomie
                this.Y += 5;
            }
        }




        // Funkcje do sterowania
        function KeyDown(e) {
            switch (e.keyCode) {
                case 37:        //strza�ka w lewo
                    if (MojStatek.X >= 0) {
                        MojStatek.X -= 10;
                        if (Pocisk.CzyWystrzelony == false) Pocisk.X -= 10;     //zmienia wsp. X pocisku tylko dop�ki nie zosta� wystrzelony
                    }
                    break;
                case 39:        //strza�ka w prawo
                    if (MojStatek.X <= width - mojStatek.width) {
                        MojStatek.X += 10;
                        if (Pocisk.CzyWystrzelony == false) Pocisk.X += 10;     //                      -----||-----
                    }
                    break;
                case 32:        //spacja
                    if (StartGry == false) StartGry = true;
                    else Strzelaj();
                    break;
                default:
                    break;
            }
        }

        // funkcja odpowiedzialna za strza�y
        function Strzelaj() {
            Pocisk.CzyWystrzelony = true;
        }
