#define _WIN32_WINNT 0x0500

#include <iostream>
#include <conio.h>
#include <windows.h>
#include <ctime>
#include <stdexcept>
#include <stdlib.h>
#include <sstream>
#include <curses.h>
#include <fstream>
#include <string>

using namespace std;

struct casella
    {
        unsigned char output;
        bool over=true;
        bool kill=false;
        bool check=true;
        int priority=0;
        bool lava=false;
        short colore=0;
    };

struct tizio
    {
        int riga=0;
        int colonna=0;
    };

struct palla
{
    int riga=27;
    int colonna=4;
    short direzione=1;
};

struct parti
{
    unsigned char out=0;
    tizio coo;
};

//IMPOSTAZIONI D'AMMINISTRATORE
int refresh_delay=30;
int delay_cannone=8;
int laser_delay=11;
int Lfire_delay=3;
int speednemico=2;
int timer_mine=3;
int priority_cannone=2;
int priority_laser=1;
int priority_palla=4;
int priority_nemico=9;
int priority_venom=9;
int priority_mina=8;
int priority_yourlaser=7;
int priority_minibossbullets=9;
int priority_cuore=10;
int priority_flashbomb=10;
int priority_ragnetti=6;
int frequenzaAttaccoBoss=60;

//VARIABILI ESSENZIALI
int const rig=30;
int const col=41;
int const MAX_NEMICI=40;
int const MAX_PALLE=20;
int lv=1;
int c=0;//(col-3)-delay_cannone;
int c_nemici=0;
int c_nemici_posizionati=0;
int c_palle_posizionate=0;
int c_flashbomb=0;
int c_boss=0;
int c_morti=0;
int rigcuore=0;
int colcuore=0;
int vitaBoss=38;
int vitaMiniboss=34;
int colpito=0;
bool cancella=false;
bool dead=false;
bool win=false;
bool venom=false;
bool hidden=false;
bool unaBombaSulCampo=false;
bool usataBomba=true;
bool attacckBoss=false;
bool chiudi=false;
bool dirMiniboss=false;
bool dirMinibossY=false;
bool cambia[MAX_NEMICI]={false};
bool direzioneRagnetti[8]={false};
unsigned char stampaVitaMiniboss[38]={219};
unsigned char stampaVitaboss[38]={219};
tizio casellavenom;
casella campo[rig][col];
tizio you;
tizio nemico[MAX_NEMICI];
palla palle[MAX_PALLE];
parti miniboss[16];
time_t timer;
time_t now=time(0);
ofstream scrivi;
ifstream leggi;

//FUNZIONI
void outro();
void stampaASCII();
void stampacolori();
void azzeracampo();
void stampacampo();
void movimento(int x, int y);
void invocanemici();
void resetcheck();
void altro();
void vinciperdi();
void hud();
void testlv();
void spara(int riga, int colonna);
void posiziona(int rig_cuore, int col_cuore, int rig_you, int col_you);
void posizionaOstacoli(string nemico, int riga, int colonna);
void posizionaNemici(int Nriga, int Ncolonna);
void posizionaPalla(int Priga, int Pcolonna);
void posizionaLava(int Lriga, int Lcolonna);
void lava();
void mine();
void Ecannonesx(int riga, int c, bool cancella);
void Ecannonedx(int riga, int c, bool cancella);
void Elaser(int colonna);
void Epalla();
void Enemico();
void Emina();
void Miniboss();
void attaccominiboss(int riga, int colonna);
void costrusciminiboss();
void Eragni(int Rriga, int Rcolonna);
void boss();
void attaccoBoss();
void costruisciBoss();
void chiudiMandibole();
void ScreenSize(int x, int y);
void ClearScreen();
void leggilivello();
void scrivisufileditesto();
int StringToNumber ( const string &Text );

int main()
{
    srand(time(0));
    ScreenSize(90,60);
    //stampaASCII();
    //stampacolori();
    //scrivisufileditesto();
    leggilivello();
    //testlv();
    initscr();
    while(lv<=41)
    {
        noecho();
        ClearScreen();
        azzeracampo();
        while(dead==false && win==false)
        {
            //ClearScreen();
            stampacampo();
            refresh();
            invocanemici();
            resetcheck();
            movimento(you.riga, you.colonna);
            altro();
            Sleep(refresh_delay);
        }
        ClearScreen();
        vinciperdi();
        scrivisufileditesto();
    }
    outro();
    scrivisufileditesto();
}

void stampaASCII()
{
    for(int i=0; i<256; i++ )
        {
            cout<<endl<<i<<": #"<<(char)i<<"#";
        }
}

void SetColor(int ForgC)
{
     WORD wColor;
     HANDLE hStdOut = GetStdHandle(STD_OUTPUT_HANDLE);
     CONSOLE_SCREEN_BUFFER_INFO csbi;
     if(GetConsoleScreenBufferInfo(hStdOut, &csbi))
     {
          wColor = (csbi.wAttributes & 0xF0) + (ForgC & 0x0F);
          SetConsoleTextAttribute(hStdOut, wColor);
     }
     return;

/*
0   BLACK
1   BLUE
2   GREEN
3   CYAN
4   RED
5   MAGENTA
6   BROWN
7   LIGHTGRAY
8   DARKGRAY
9   LIGHTBLUE
10  LIGHTGREEN
11  LIGHTCYAN
12  LIGHTRED
13  LIGHTMAGENTA
14  YELLOW
15  WHITE
*/
}

void outro()
{
    SetColor(14);
    cout<<"\n\n\n\n";
    cout<<"                     COMPLIMENTI HAI FINITO TUTTI I LIVELLI\n";
    cout<<"                    Gioco Ideato e Creato da DE SALVO LUDOVICO";
    cout<<"\n\n\n               Premi un qualsiasi tasto per uscire.";
    lv=1;
    getch();
}

void azzeracampo()
{
    venom=false;
    timer=time(0);
    c_nemici_posizionati=0;
    c_palle_posizionate=0;
    c_flashbomb=0;
    c_boss=0;
    usataBomba=true;
    unaBombaSulCampo=false;

    if(lv==41)
        timer=now-4;

    for(int i=0; i<col; i++)
    {
        campo[0][i].output=219;
        campo[0][i].over=false;
        campo[0][i].kill=false;
        campo[0][i].colore=7;
    }
    for(int i=1; i<rig-2; i++)
    {
        campo[i][0].output=219;
        campo[i][0].over=false;
        campo[i][0].kill=false;
        campo[i][0].colore=7;
        campo[i][col-2].output=219;
        campo[i][col-2].over=false;
        campo[i][col-2].kill=false;
        campo[i][col-2].colore=7;
    }
    for(int i=0; i<col-1;i++)
    {
        campo[rig-2][i].output=219;
        campo[rig-2][i].over=false;
        campo[rig-2][i].kill=false;
        campo[rig-2][i].colore=7;
    }
    for(int i=1;i<rig-2;i++)
        for(int j=1; j<col-2; j++)
            {
                campo[i][j].output=0;
                campo[i][j].over=true;
                campo[i][j].kill=false;
                campo[i][j].check=true;
                campo[i][j].priority=0;
                campo[i][j].lava=false;
                campo[i][j].colore=0;
            }

    switch(lv)
    {
    case 0:
        posiziona(27,20,27,19);

        posizionaOstacoli("cannonesx",4,0);
        posizionaOstacoli("cannonedx",6,0);
        posizionaOstacoli("laser",0,8);
        posizionaOstacoli("mina",20,20);
        posizionaOstacoli("flashbomb",10,10);
        posizionaOstacoli("flashbomb",10,11);
        posizionaOstacoli("flashbomb",10,12);

        posizionaNemici(9,11);
        posizionaNemici(9,30);

        posizionaPalla(10,8);
    break;

    case 1:
        posiziona(1,19,27,19);

        posizionaOstacoli("cannonesx",4,0);
        posizionaOstacoli("cannonedx",7,0);
        posizionaOstacoli("cannonesx",10,0);
    break;
    case 2:
        posiziona(1,19,27,19);

        posizionaOstacoli("cannonesx",4,0);
        posizionaOstacoli("cannonesx",5,0);
        posizionaOstacoli("cannonesx",6,0);
    break;
    case 3:
        posiziona(1,19,27,19);

        posizionaOstacoli("cannonesx",4,0);
        posizionaOstacoli("cannonesx",5,0);
        posizionaOstacoli("cannonedx",8,0);
        posizionaOstacoli("cannonesx",11,0);
        posizionaOstacoli("cannonesx",12,0);
        posizionaOstacoli("cannonedx",15,0);
        posizionaOstacoli("cannonesx",18,0);
        posizionaOstacoli("cannonesx",19,0);
    break;
    case 4:
        posiziona(1,19,27,19);

        posizionaOstacoli("cannonesx",4,0);
        posizionaOstacoli("cannonedx",5,0);
        posizionaOstacoli("cannonesx",6,0);
        posizionaOstacoli("cannonesx",10,0);
        posizionaOstacoli("cannonedx",11,0);
        posizionaOstacoli("cannonesx",12,0);
    break;
    case 5:
        posiziona(1,19,27,19);

        posizionaOstacoli("cannonesx",4,0);
        posizionaOstacoli("cannonedx",5,0);
        posizionaOstacoli("cannonesx",7,0);
        posizionaOstacoli("cannonedx",8,0);
        posizionaOstacoli("cannonesx",10,0);
        posizionaOstacoli("cannonesx",11,0);
        posizionaOstacoli("cannonesx",12,0);
        posizionaOstacoli("cannonedx",14,0);
        posizionaOstacoli("cannonedx",15,0);
        posizionaOstacoli("cannonedx",16,0);
    break;
    case 6:
        posiziona(1,20,27,18);

        posizionaOstacoli("laser",0,19);
    break;
    case 7:
        posiziona(1,35,27,4);

        posizionaOstacoli("laser",0,10);
        posizionaOstacoli("laser",0,20);
        posizionaOstacoli("laser",0,30);
    break;
    case 8:
        posiziona(1,35,27,4);

        posizionaOstacoli("laser",0,10);
        posizionaOstacoli("laser",0,20);
        posizionaOstacoli("laser",0,30);
        posizionaOstacoli("cannonedx",5,0);
        posizionaOstacoli("cannonesx",10,0);
        posizionaOstacoli("cannonedx",15,0);
    break;
    case 9:
        posiziona(1,35,27,4);

        posizionaOstacoli("laser",0,10);
        posizionaOstacoli("laser",0,11);
        posizionaOstacoli("laser",0,20);
        posizionaOstacoli("laser",0,21);
        posizionaOstacoli("laser",0,30);
        posizionaOstacoli("laser",0,31);
        posizionaOstacoli("cannonedx",5,0);
        posizionaOstacoli("cannonedx",6,0);
        posizionaOstacoli("cannonesx",10,0);
        posizionaOstacoli("cannonesx",11,0);
        posizionaOstacoli("cannonedx",15,0);
        posizionaOstacoli("cannonedx",16,0);
    break;
    case 10:
        posiziona(1,19,27,19);

        posizionaPalla(2,4);
    break;
    case 11:
        posiziona(1,19,27,29);

        posizionaPalla(2,4);
        posizionaPalla(26,3);
        posizionaPalla(25,30);
        posizionaPalla(10,10);
        posizionaPalla(4,33);
    break;
    case 12:
        posiziona(1,19,27,29);

        posizionaPalla(2,4);
        posizionaPalla(26,3);
        posizionaPalla(25,30);
        posizionaPalla(10,10);
        posizionaPalla(4,33);

        posizionaOstacoli("cannonesx",4,0);
        posizionaOstacoli("cannonesx",5,0);
        posizionaOstacoli("cannonedx",10,0);
        posizionaOstacoli("cannonedx",11,0);
        posizionaOstacoli("cannonesx",15,0);
        posizionaOstacoli("cannonesx",16,0);
    break;
    case 13:
        posiziona(1,35,27,4);

        posizionaOstacoli("laser",0,10);
        posizionaOstacoli("laser",0,20);
        posizionaOstacoli("laser",0,30);

        posizionaPalla(2,4);
        posizionaPalla(26,3);
        posizionaPalla(25,30);
        posizionaPalla(4,33);
    break;
    case 14:
        posiziona(1,19,27,19);

        posizionaPalla(2,4);
        posizionaPalla(26,3);
        posizionaPalla(25,30);
        posizionaPalla(4,33);
        posizionaPalla(7,8);
        posizionaPalla(20,29);
        posizionaPalla(14,33);
        posizionaPalla(1,3);
        posizionaPalla(22,22);
        posizionaPalla(9,25);
        posizionaPalla(14,10);
        posizionaPalla(26,7);
    break;
    case 15:
        posiziona(1,35,27,4);

        posizionaOstacoli("laser",0,10);
        posizionaOstacoli("laser",0,20);
        posizionaOstacoli("laser",0,30);
        posizionaOstacoli("cannonesx",4,0);
        posizionaOstacoli("cannonedx",8,0);
        posizionaOstacoli("cannonesx",12,0);
        posizionaOstacoli("cannonesx",16,0);
        posizionaOstacoli("cannonedx",20,0);
        posizionaOstacoli("cannonesx",24,0);

        posizionaPalla(2,4);
        posizionaPalla(26,3);
        posizionaPalla(25,30);
        posizionaPalla(4,33);
        posizionaPalla(22,22);
    break;
    case 16:
        posiziona(1,19,27,19);

        posizionaNemici(13,19);
    break;
    case 17:
        posiziona(1,19,27,19);

        posizionaNemici(13,19);

        posizionaOstacoli("cannonesx",4,0);
        posizionaOstacoli("cannonesx",5,0);
        posizionaOstacoli("cannonesx",6,0);
        posizionaOstacoli("cannonedx",10,0);
        posizionaOstacoli("cannonedx",11,0);
        posizionaOstacoli("cannonedx",12,0);
        posizionaOstacoli("cannonesx",16,0);
        posizionaOstacoli("cannonesx",17,0);
        posizionaOstacoli("cannonesx",18,0);
    break;
    case 18:
        posiziona(1,35,27,4);

        posizionaOstacoli("laser",0,10);
        posizionaOstacoli("laser",0,14);
        posizionaOstacoli("laser",0,18);

        posizionaNemici(27,38);
    break;
    case 19:
        posiziona(1,19,27,19);

        posizionaNemici(13,19);
        posizionaNemici(27,1);
        posizionaNemici(27,38);
    break;
    case 20:
        posiziona(1,19,27,19);

        posizionaNemici(27,1);
        posizionaNemici(27,38);

        posizionaOstacoli("cannonesx",5,0);
        posizionaOstacoli("cannonedx",6,0);
        posizionaOstacoli("cannonesx",11,0);
        posizionaOstacoli("cannonedx",12,0);
        posizionaOstacoli("cannonesx",17,0);
        posizionaOstacoli("cannonedx",18,0);

        posizionaPalla(10,10);
        posizionaPalla(10,20);
        posizionaPalla(20,10);
        posizionaPalla(20,20);
    break;
    case 21:
        posiziona(0,0,27,19);

        for(int i=0; i<38; i++)
            stampaVitaMiniboss[i]=219;

        vitaMiniboss=38;

        campo[0][0].output=219;
        campo[0][0].colore=7;

        costrusciminiboss();

    break;
    case 22:
        posiziona(1,19,27,19);

        mine();
    break;
    case 23:
        posiziona(1,19,27,19);

        posizionaOstacoli("laser",0,2);
        posizionaOstacoli("laser",0,3);
        posizionaOstacoli("flashbomb",20,1);

        mine();
    break;
    case 24:
        posiziona(1,30,27,10);

        posizionaOstacoli("flashbomb",27,11);
        posizionaOstacoli("flashbomb",27,9);
        posizionaOstacoli("flashbomb",17,15);
        posizionaOstacoli("flashbomb",27,38);

        mine();
    break;
    case 25:
        posiziona(1,19,27,19);

        posizionaOstacoli("cannonesx",4,0);
        posizionaOstacoli("cannonedx",5,0);
        posizionaOstacoli("cannonesx",7,0);
        posizionaOstacoli("cannonedx",8,0);
        posizionaOstacoli("cannonesx",10,0);
        posizionaOstacoli("cannonedx",11,0);
        posizionaOstacoli("laser",0,37);
        posizionaOstacoli("laser",0,35);
        posizionaOstacoli("flashbomb",6,38);
        posizionaOstacoli("flashbomb",12,38);
        mine();
    break;
    case 26:
        posiziona(1,19,27,19);

        posizionaOstacoli("flashbomb",27,18);
        posizionaOstacoli("flashbomb",27,20);
        mine();

        posizionaPalla(10,10);
        posizionaPalla(10,20);
        posizionaPalla(20,10);
        posizionaPalla(20,20);
    break;
    case 27:
        posiziona(1,19,27,19);

        mine();
        posizionaOstacoli("flashbomb",27,18);

        posizionaNemici(27,1);
        posizionaNemici(27,28);
    break;
    case 28:
        posiziona(27,30,27,10);

        posizionaOstacoli("cannonesx",4,0);
        posizionaOstacoli("cannonedx",5,0);
        posizionaOstacoli("cannonesx",8,0);
        posizionaOstacoli("cannonedx",9,0);
        posizionaOstacoli("cannonesx",12,0);
        posizionaOstacoli("cannonedx",13,0);
        posizionaOstacoli("cannonesx",16,0);
        posizionaOstacoli("cannonedx",17,0);
        posizionaOstacoli("cannonesx",20,0);
        posizionaOstacoli("cannonedx",21,0);
        posizionaOstacoli("flashbomb",1,14);
        posizionaOstacoli("flashbomb",1,15);
        posizionaOstacoli("flashbomb",1,16);
        posizionaOstacoli("flashbomb",1,17);

        posizionaNemici(27,1);

        mine();
    break;
    case 29:
        posiziona(1,19,27,19);

        posizionaNemici(1,1);

        mine();
    break;
    case 30:
        posiziona(3,38,27,19);

        posizionaOstacoli("cannonesx",2,0);
        posizionaOstacoli("cannonesx",3,0);
        posizionaOstacoli("cannonesx",4,0);
        posizionaOstacoli("cannonedx",6,0);
        posizionaOstacoli("cannonedx",7,0);
        posizionaOstacoli("cannonedx",8,0);
        posizionaOstacoli("cannonesx",10,0);
        posizionaOstacoli("cannonesx",11,0);
        posizionaOstacoli("cannonesx",12,0);
        posizionaOstacoli("cannonedx",14,0);
        posizionaOstacoli("cannonedx",15,0);
        posizionaOstacoli("cannonedx",16,0);

        lava();
    break;
    case 31:
        posiziona(2,19,27,10);

        posizionaOstacoli("laser",0,19);

        lava();
    break;
    case 32:
        posiziona(1,38,27,1);

        posizionaPalla(2,2);
        posizionaPalla(2,8);
        posizionaPalla(2,14);
        posizionaPalla(2,20);
        posizionaPalla(2,26);

        lava();
    break;
    case 33:
        posiziona(13,38,13,3);

        posizionaNemici(13,1);

        lava();
    break;
    case 34:
        posiziona(12,38,12,1);

        lava();
        mine();
    break;
    case 35:
        posiziona(1,19,27,19);

        posizionaOstacoli("cannonedx",23,0);
        posizionaOstacoli("cannonedx",22,0);
        posizionaOstacoli("cannonesx",21,0);
        posizionaOstacoli("cannonesx",20,0);
        posizionaOstacoli("cannonedx",19,0);
        posizionaOstacoli("cannonedx",18,0);
        posizionaOstacoli("cannonesx",17,0);
        posizionaOstacoli("cannonesx",16,0);
        posizionaOstacoli("cannonedx",15,0);
        posizionaOstacoli("cannonedx",14,0);
        posizionaOstacoli("cannonesx",11,0);
        posizionaOstacoli("cannonesx",10,0);
        posizionaOstacoli("cannonesx",9,0);
        posizionaOstacoli("cannonesx",8,0);
        posizionaOstacoli("cannonedx",7,0);
        posizionaOstacoli("cannonedx",6,0);
        posizionaOstacoli("cannonedx",5,0);
        posizionaOstacoli("cannonedx",4,0);
    break;
    case 36:
        posiziona(1,38,27,1);

        posizionaOstacoli("laser",0,2);
        posizionaOstacoli("laser",0,4);
        posizionaOstacoli("laser",0,8);
        posizionaOstacoli("laser",0,10);
        posizionaOstacoli("laser",0,12);
        posizionaOstacoli("laser",0,14);
        posizionaOstacoli("laser",0,16);
        posizionaOstacoli("laser",0,18);
        posizionaOstacoli("laser",0,20);
        posizionaOstacoli("laser",0,22);
        posizionaOstacoli("laser",0,24);
        posizionaOstacoli("laser",0,25);
        posizionaOstacoli("laser",0,27);
        posizionaOstacoli("laser",0,28);
        posizionaOstacoli("laser",0,6);
        posizionaOstacoli("laser",0,30);
        posizionaOstacoli("laser",0,31);
        posizionaOstacoli("laser",0,33);
        posizionaOstacoli("laser",0,34);
        posizionaOstacoli("laser",0,36);
        posizionaOstacoli("laser",0,37);
    break;
    case 37:
        posiziona(1,19,27,4);

        posizionaPalla(4,32);
        posizionaPalla(11,15);
        posizionaPalla(7,13);
        posizionaPalla(5,26);
        posizionaPalla(19,17);
        posizionaPalla(23,17);
        posizionaPalla(27,30);
        posizionaPalla(18,19);
        posizionaPalla(5,11);
        posizionaPalla(14,13);
        posizionaPalla(10,6);
        posizionaPalla(19,8);
        posizionaPalla(21,20);
        posizionaPalla(22,20);
        posizionaPalla(6,10);
        posizionaPalla(20,38);
        posizionaPalla(2,21);
        posizionaPalla(13,28);
        posizionaPalla(6,10);
        posizionaPalla(15,37);
    break;
    case 38:
        posiziona(1,19,25,19);

        posizionaNemici(1,17);
        posizionaNemici(1,21);
        posizionaNemici(2,20);
        posizionaNemici(2,18);
        posizionaNemici(3,19);
    break;
    case 39:
        posiziona(2,37,25,3);

        lava();
    break;
    case 40:
        posiziona(2,37,25,3);

        posizionaOstacoli("flashbomb",27,1);
        posizionaOstacoli("flashbomb",26,1);
        posizionaOstacoli("flashbomb",25,1);
        posizionaOstacoli("flashbomb",24,1);
        posizionaOstacoli("flashbomb",23,1);
        posizionaOstacoli("flashbomb",27,2);
        posizionaOstacoli("flashbomb",26,2);
        posizionaOstacoli("flashbomb",25,2);
        posizionaOstacoli("flashbomb",24,2);
        posizionaOstacoli("flashbomb",23,2);
        posizionaOstacoli("flashbomb",27,3);
        posizionaOstacoli("flashbomb",26,3);
        posizionaOstacoli("flashbomb",24,3);
        posizionaOstacoli("flashbomb",23,3);
        posizionaOstacoli("flashbomb",27,4);
        posizionaOstacoli("flashbomb",26,4);
        posizionaOstacoli("flashbomb",25,4);
        posizionaOstacoli("flashbomb",24,4);
        posizionaOstacoli("flashbomb",23,4);
        posizionaOstacoli("flashbomb",27,5);
        posizionaOstacoli("flashbomb",26,5);
        posizionaOstacoli("flashbomb",25,5);
        posizionaOstacoli("flashbomb",24,5);
        posizionaOstacoli("flashbomb",23,5);


        mine();
    break;
    case 41:
        posiziona(1,19,25,19);

        vitaBoss=38;

        for(int i=0; i<38; i++)
            stampaVitaboss[i]=219;

        posizionaOstacoli("ragno",18,3);
        posizionaOstacoli("ragno",19,30);
        posizionaOstacoli("ragno",20,23);
        posizionaOstacoli("ragno",21,6);
        posizionaOstacoli("ragno",22,17);
        posizionaOstacoli("ragno",23,34);
        posizionaOstacoli("ragno",24,11);
        posizionaOstacoli("ragno",25,3);

        costruisciBoss();

        lava();
    }
}

void stampacampo()
{
    cout<<"By De Salvo Ludovico\n\n\n";

    if(lv==41)
    {
        SetColor(12);
        cout<<"\n                           BOSS";
        cout<<"\n             ";
        for(int i=0; i<38; i++)
            cout<<stampaVitaboss[i];
    }
    if(lv==21)
    {
        SetColor(12);
        cout<<"\n                         MINIBOSS";
        cout<<"\n             ";
        for(int i=0; i<38; i++)
            cout<<stampaVitaMiniboss[i];
    }


    for(int i=0; i<rig-1;i++)
    {
        cout<<"\n";
        cout<<"            ";

        for(int j=0; j<col-1; j++)
            {
                SetColor(campo[i][j].colore);
                cout<<campo[i][j].output;
            }

        if(i==3)
        {
            SetColor(11);
            cout<<"LIVELLO "<<lv;
        }
        if(i==4)
        {
            SetColor(12);
            cout<<"MORTI: "<<c_morti;
        }
        if((lv>=23)&&(i==5))
        {
            SetColor(14);
            cout<<"BOMBE: "<<c_flashbomb;
        }
    }
    hud();
}

void movimento(int x, int y)
{
    char dir;

    if(kbhit())
        {
            dir=getch();
            campo[x][y].output=0;
            campo[x][y].colore=0;
        }
    dir=toupper(dir);

    switch (dir)
        {
           case 'W':
                if(campo[x-1][y].over==true)
                    {
                        x--;
                    }
           break;
           case 'A':
                if(campo[x][y-1].over==true)
                   {
                        y--;
                   }
           break;
           case 'S':
                if(campo[x+1][y].over==true)
                   {
                       x++;
                   }
           break;
           case 'D':
                if(campo[x][y+1].over==true)
                   {
                       y++;
                   }
           break;
           case 'E':
                if(c_flashbomb>0)
                {
                    timer=time(0);
                    campo[x][y].priority=0;
                    campo[x][y].colore=0;
                    hidden=false;
                    c_flashbomb--;
                    usataBomba=true;
                }
            break;
           case 'Q':
                {
                    if(lv==41 || lv==21)
                        spara(x,y);
                }
            break;
        }

        if(campo[x][y].output==162)
            {
                c_flashbomb++;
                campo[x][y].priority=0;
            }

        campo[x][y].output=2;
        campo[x][y].colore=11;

        if(campo[x][y].kill==true)
            {
                dead=true;
            }

        you.riga=x;
        you.colonna=y;
}

void invocanemici()
{
    c_nemici=0;
    for(int i=0;i<rig;i++)
            for(int j=0; j<col; j++)
                {
                    if(campo[i][j].check==true)
                    {
                        if(campo[i][j].output==127)
                            Elaser(j);
                        if(campo[i][j].output==16)
                            Ecannonesx(i,c,cancella);
                        if(campo[i][j].output==17)
                            Ecannonedx(i,c,cancella);
                        if((campo[i][j].output==43)||(campo[i][j].output==42))
                            Epalla();
                        if(campo[i][j].output==1)
                            Enemico();
                        if(lv==21 && campo[i][j].output==31)
                            attaccominiboss(i,j);
                        if(i<26 && i>17 && lv==41)
                        {
                            bool ce=false;

                            for(int k=1; k<39; k++)
                                if(campo[i][k].output==15)
                                    ce=true;
                            if(ce)
                            {
                                if(campo[i][j].output==15)
                                    Eragni(i,j);
                            }
                            else
                            {
                                campo[i][1].output=15;
                                direzioneRagnetti[i-18]=false;
                            }
                        }
                    }
                }
    Emina();

    if(lv==21)
        {
            if(vitaMiniboss>0)
                Miniboss();
            else
            {
            for(int i=1; i<28; i++)
                for(int j=1; j<39; j++)
                    {
                        campo[i][j].output=0;
                        campo[i][j].over=true;
                        campo[i][j].kill=false;
                        campo[i][j].colore=0;
                        campo[i][j].priority=0;
                    }
            posiziona(1,19,you.riga,you.colonna);
            }
        }

    if(lv==41)
        {
            if(vitaBoss>0)
            boss();
            else
            {
            for(int i=1; i<28; i++)
                for(int j=1; j<39; j++)
                    {
                        campo[i][j].output=0;
                        campo[i][j].over=true;
                        campo[i][j].kill=false;
                        campo[i][j].colore=0;
                        campo[i][j].priority=0;
                    }
            posiziona(1,19,you.riga,you.colonna);
            attacckBoss=false;
        }
        }
}

void resetcheck()
{
    for(int i=0;i<rig;i++)
        for(int j=0; j<col; j++)
            {
                campo[i][j].check=true;

                if(campo[i][j].lava==true)
                {
                    campo[i][j].kill=true;
                    if(campo[i][j].output==0)
                        campo[i][j].output=178;
                        campo[i][j].colore=12;
                }


                if(campo[i][j].output==157)
                    {
                        if(hidden)
                            campo[i][j].colore=0;
                        else
                            campo[i][j].colore=12;
                    }
                if(lv==41)
                    {
                        if(campo[i][j].output==179)
                        {
                            campo[i][j].output=0;
                            campo[i][j].colore=0;
                            campo[i][j].priority=0;
                        }
                        if(campo[i][j].output==162)
                        {
                            unaBombaSulCampo=true;
                        }
                        else
                            unaBombaSulCampo=false;
                    }
                if(lv==21)
                    if(campo[i][j].output==179 && campo[i][j].colore==12)
                        {
                            campo[i][j].output=0;
                            campo[i][j].colore=0;
                            campo[i][j].priority=0;
                        }

            }
}

void altro()
{
        c++;

        if(c>col-4)
            {
                c-=delay_cannone;
                cancella=true;
            }
        else
            cancella=false;

        if(you.riga==rigcuore && you.colonna==colcuore)
            win=true;

        if(campo[you.riga][you.colonna].over==false)
            dead=true;
}

void vinciperdi()
{
    if(dead==true)
    {
        SetColor(12);
        cout<<"\n\n\n\n                              HAI PERSO!!!";
        cout<<"\n                               Premi R per riprovare.";
        dead=false;
        c_morti++;

        char get;

        do
        {
            get=getch();
        }while(get!='r');

    }
    if(win==true)
    {
        cout<<"\n\n\n\n                              HAI VINTO!!!";
        cout<<"\n                       Premi T per passare al livello successivo.";
        lv++;
        win=false;

        char get;

        do
        {
            get=getch();
        }while(get!='t');
    }
}

void hud()
{
    SetColor(14);
    switch(lv)
    {
        case 1:
        cout<<"\n    Ciao!!! Benvenuto in AVOID!!!";
        cout<<"\n    Quelli che vedi sono cannoni, non farti colpire!";
        cout<<"\n    Usa W,A,S,D per muoverti.";
        cout<<"\n    Raggiungi il "; SetColor(13); cout<<(char) 3; SetColor(14);
        cout<<"\n    ATTENZIONE: EVITA DI TENERE PREMUTI I TASTI PER UNA MIGLIORE ESPERIENZA DI GIOCO";

    break;
    case 6:
        cout<<"\n            Nuovo ostacolo: LASER!";
    break;
    case 10:
        cout<<"\n            Chi ha messo quella cosa li?";
    break;
    case 16:
        cout<<"\n            Non sei solo, ma serebbe stato meglio se lo fossi stato.";
    break;
    case 21:
        cout<<"\n            ATTENZIONE MINIBOSS!! PREMI Q PER SPARARE";
    break;
    case 22:
        cout<<"\n            Quelle che hai visto sono mine. Memorizza le loro posizioni,\n             dopo 3 secondi diventano invisibili";
    break;
    case 23:
        cout<<"\n            Quella è una bomba accecante. Una volta presa premi E per usarla,\n             e ti permetterà di vedere le mine per altri 3 secondi";
    break;
    case 24:
        cout<<"\n            Puoi prendere più di una bomba alla volta, in alto a destra\n             è mostrato quante ne possiedi";
    break;
    case 30:
        cout<<"\n            Sei arrivato in una zona lavica, non andarci sopra!";
    break;
    case 41:
        cout<<"\n            BOSS: Solo lui ti sepera dalla vittoria, trova un modo per ucciderlo. \n             PREMI Q PER SPARARE. P.S attento alle zampe";
    break;
    }

}

void Ecannonesx(int riga, int c, bool cancella)
{
    int d=0; int i=0; int tmp=c;

        d=tmp;

        do
        {
            d-=delay_cannone;
            i++;
        }while(d>0);

    for(int j=0; j<i; j++)
    {
        if(priority_cannone>campo[riga][(c+1)-(delay_cannone*j)].priority)
        {
            if(campo[riga][(c+1)-(delay_cannone*j)].output==2)
                dead=true;

            campo[riga][(c+1)-(delay_cannone*j)].output=254;
            campo[riga][(c+1)-(delay_cannone*j)].over=true;
            campo[riga][(c+1)-(delay_cannone*j)].kill=true;
            campo[riga][(c+1)-(delay_cannone*j)].priority=priority_cannone;
            campo[riga][(c+1)-(delay_cannone*j)].colore=14;
        }

        if((c!=0)&&(campo[riga][(c)-(delay_cannone*j)].priority<=priority_cannone))
        {
            campo[riga][(c)-(delay_cannone*j)].output=0;
            campo[riga][(c)-(delay_cannone*j)].over=true;
            campo[riga][(c)-(delay_cannone*j)].kill=false;
            campo[riga][(c)-(delay_cannone*j)].priority=0;
            campo[riga][(c)-(delay_cannone*j)].colore=0;
        }
    }

    if((cancella==true)&&(campo[riga][col-3].priority<=priority_cannone))
    {
        campo[riga][col-3].output=0;
        campo[riga][col-3].over=true;
        campo[riga][col-3].kill=false;
        campo[riga][col-3].priority=0;
        campo[riga][col-3].colore=0;
    }

    campo[riga][1].output=16;
    campo[riga][1].over=false;
    campo[riga][1].kill=false;
    campo[riga][1].colore=8;
}

void Ecannonedx(int riga, int c, bool cancella)
{
    int d=0; int i=0; int g=0; int tmp=c;

    g=37-c;
    d=tmp;

    do
    {
        d-=delay_cannone;
        i++;
    }while(d>0);

    for(int j=0; j<i; j++)
    {
    if(priority_cannone>campo[riga][(g+1)+(delay_cannone*j)].priority)
    {
        if(campo[riga][(g+1)+(delay_cannone*j)].output==2)
            dead=true;

        campo[riga][(g+1)+(delay_cannone*j)].output=254;
        campo[riga][(g+1)+(delay_cannone*j)].over=true;
        campo[riga][(g+1)+(delay_cannone*j)].kill=true;
        campo[riga][(g+1)+(delay_cannone*j)].priority=priority_cannone;
        campo[riga][(g+1)+(delay_cannone*j)].colore=14;
    }

    if((c!=0)&&(campo[riga][(g+2)+(delay_cannone*j)].priority<=priority_cannone))
    {
            campo[riga][(g+2)+(delay_cannone*j)].output=0;
            campo[riga][(g+2)+(delay_cannone*j)].over=true;
            campo[riga][(g+2)+(delay_cannone*j)].kill=false;
            campo[riga][(g+2)+(delay_cannone*j)].priority=0;
            campo[riga][(g+2)+(delay_cannone*j)].colore=0;
    }
    }
    if((cancella==true)&&(campo[riga][1].priority<=priority_cannone))
    {
            campo[riga][1].output=0;
            campo[riga][1].over=true;
            campo[riga][1].kill=false;
            campo[riga][1].priority=0;
            campo[riga][1].colore=0;
    }

    campo[riga][38].output=17;
    campo[riga][38].over=false;
    campo[riga][38].kill=false;
    campo[riga][38].colore=8;
}

void Elaser(int colonna)
{
    bool fire=false;

    for(int i=1; i<=Lfire_delay; i++)
    {
        if(c%laser_delay==Lfire_delay-i)
            fire=true;
    }

    if(fire==true)
    {
        for(int i=1; i<rig-3;i++)
        {
            if(priority_laser>campo[i][colonna].priority)
            {
                if(campo[i][colonna].output==2)
                    dead=true;

                campo[i][colonna].output=179;
                campo[i][colonna].over=true;
                campo[i][colonna].kill=true;
                campo[i][colonna].priority=priority_laser;
                campo[i][colonna].colore=12;
            }
        }
    }
    else
    {
        for(int i=1; i<rig-3; i++)
        {
            if(campo[i][colonna].output==179)
            {
                    campo[i][colonna].output=0;
                    campo[i][colonna].over=true;
                    campo[i][colonna].kill=false;
                    campo[i][colonna].priority=0;
                    campo[i][colonna].colore=0;
            }
        }
    }
}

void Epalla()
{
    bool animazione1=false;

    if(c%2==0)
        animazione1=true;

    for(int i=0; i<c_palle_posizionate; i++)
    {
    switch(palle[i].direzione)
    {
        case 1:
        {
            if((campo[palle[i].riga-1][palle[i].colonna+1].over==true)&&(campo[palle[i].riga-1][palle[i].colonna].over==true)&&
               (priority_palla>campo[palle[i].riga-1][palle[i].colonna+1].priority))
            {
                campo[palle[i].riga][palle[i].colonna].output=0;
                campo[palle[i].riga][palle[i].colonna].kill=false;
                campo[palle[i].riga][palle[i].colonna].priority=0;
                campo[palle[i].riga][palle[i].colonna].colore=0;

                palle[i].riga--;
                palle[i].colonna++;

                if(campo[palle[i].riga][palle[i].colonna].output==2)
                    dead=true;

                if(animazione1==true)
                    campo[palle[i].riga][palle[i].colonna].output=43;
                else
                    campo[palle[i].riga][palle[i].colonna].output=42;

                campo[palle[i].riga][palle[i].colonna].kill=true;
                campo[palle[i].riga][palle[i].colonna].check=false;
                campo[palle[i].riga][palle[i].colonna].priority=priority_palla;
                campo[palle[i].riga][palle[i].colonna].colore=10;
            }
            else
            {
                if(campo[palle[i].riga-1][palle[i].colonna].over==true)
                    palle[i].direzione=4;
                else
                    palle[i].direzione=2;
            }
        }
        break;
        case 2:
        {
            if((campo[palle[i].riga+1][palle[i].colonna+1].over==true)&&(campo[palle[i].riga][palle[i].colonna+1].over==true)&&
               (priority_palla>campo[palle[i].riga+1][palle[i].colonna+1].priority))
            {
                campo[palle[i].riga][palle[i].colonna].output=0;
                campo[palle[i].riga][palle[i].colonna].kill=false;
                campo[palle[i].riga][palle[i].colonna].priority=0;
                campo[palle[i].riga][palle[i].colonna].colore=0;

                palle[i].riga++;
                palle[i].colonna++;

                if(campo[palle[i].riga][palle[i].colonna].output==2)
                    dead=true;

                if(animazione1==true)
                    campo[palle[i].riga][palle[i].colonna].output=43;
                else
                    campo[palle[i].riga][palle[i].colonna].output=42;

                campo[palle[i].riga][palle[i].colonna].kill=true;
                campo[palle[i].riga][palle[i].colonna].check=false;
                campo[palle[i].riga][palle[i].colonna].priority=priority_palla;
                campo[palle[i].riga][palle[i].colonna].colore=10;
            }
            else
            {
                if(campo[palle[i].riga][palle[i].colonna+1].over==true)
                    palle[i].direzione=1;
                else
                    palle[i].direzione=3;
            }
        }
        break;
        case 3:
        {
            if((campo[palle[i].riga+1][palle[i].colonna-1].over==true)&&(campo[palle[i].riga+1][palle[i].colonna].over==true)&&
               (priority_palla>campo[palle[i].riga+1][palle[i].colonna-1].priority))
            {
                campo[palle[i].riga][palle[i].colonna].output=0;
                campo[palle[i].riga][palle[i].colonna].kill=false;
                campo[palle[i].riga][palle[i].colonna].priority=0;
                campo[palle[i].riga][palle[i].colonna].colore=0;

                palle[i].riga++;
                palle[i].colonna--;

                if(campo[palle[i].riga][palle[i].colonna].output==2)
                    dead=true;

                if(animazione1==true)
                    campo[palle[i].riga][palle[i].colonna].output=43;
                else
                    campo[palle[i].riga][palle[i].colonna].output=42;

                campo[palle[i].riga][palle[i].colonna].kill=true;
                campo[palle[i].riga][palle[i].colonna].check=false;
                campo[palle[i].riga][palle[i].colonna].priority=priority_palla;
                campo[palle[i].riga][palle[i].colonna].colore=10;
            }
           else
            {
                if(campo[palle[i].riga+1][palle[i].colonna].over==true)
                    palle[i].direzione=2;
                else
                    palle[i].direzione=4;
            }
        }
        break;
        case 4:
        {
            if((campo[palle[i].riga-1][palle[i].colonna-1].over==true)&&(campo[palle[i].riga][palle[i].colonna-1].over==true)&&
               (priority_palla>campo[palle[i].riga-1][palle[i].colonna-1].priority))
            {
                campo[palle[i].riga][palle[i].colonna].output=0;
                campo[palle[i].riga][palle[i].colonna].kill=false;
                campo[palle[i].riga][palle[i].colonna].priority=0;
                campo[palle[i].riga][palle[i].colonna].colore=0;

                palle[i].riga--;
                palle[i].colonna--;

                if(campo[palle[i].riga][palle[i].colonna].output==2)
                    dead=true;

                if(animazione1==true)
                    campo[palle[i].riga][palle[i].colonna].output=43;
                else
                    campo[palle[i].riga][palle[i].colonna].output=42;

                campo[palle[i].riga][palle[i].colonna].kill=true;
                campo[palle[i].riga][palle[i].colonna].check=false;
                campo[palle[i].riga][palle[i].colonna].priority=priority_palla;
                campo[palle[i].riga][palle[i].colonna].colore=10;
            }
            else
            {
                if(campo[palle[i].riga][palle[i].colonna-1].over==true)
                    palle[i].direzione=3;
                else
                    palle[i].direzione=1;
            }
        }
        break;
    }
    }
}

void Enemico()
{
        if(c%speednemico==0)
        {
            if(venom==false)
            {
                campo[nemico[c_nemici].riga][nemico[c_nemici].colonna].output=0;
                campo[nemico[c_nemici].riga][nemico[c_nemici].colonna].kill=false;
                campo[nemico[c_nemici].riga][nemico[c_nemici].colonna].priority=0;
                campo[nemico[c_nemici].riga][nemico[c_nemici].colonna].colore=0;
            }
            else
            {
                campo[nemico[c_nemici].riga][nemico[c_nemici].colonna].output=177;
                campo[nemico[c_nemici].riga][nemico[c_nemici].colonna].kill=true;
                campo[nemico[c_nemici].riga][nemico[c_nemici].colonna].priority=priority_venom;
                campo[nemico[c_nemici].riga][nemico[c_nemici].colonna].colore=2;
            }

            if(!(nemico[c_nemici].riga!=you.riga && nemico[c_nemici].colonna!=you.colonna))
            {
                    if(nemico[c_nemici].riga>you.riga)
                    {
                        if((campo[nemico[c_nemici].riga-1][nemico[c_nemici].colonna].output==0)||(campo[nemico[c_nemici].riga-1][nemico[c_nemici].colonna].output==2)||(campo[nemico[c_nemici].riga-1][nemico[c_nemici].colonna].output==177))
                        nemico[c_nemici].riga--;
                    }
                    else
                    {
                        if(nemico[c_nemici].riga<you.riga)
                            if((campo[nemico[c_nemici].riga+1][nemico[c_nemici].colonna].output==0)||(campo[nemico[c_nemici].riga+1][nemico[c_nemici].colonna].output==2)||(campo[nemico[c_nemici].riga+1][nemico[c_nemici].colonna].output==177))
                                nemico[c_nemici].riga++;
                    }
                    cambia[c_nemici]=false;

                    if(nemico[c_nemici].colonna>you.colonna)
                    {
                        if((campo[nemico[c_nemici].riga][nemico[c_nemici].colonna-1].output==0)||(campo[nemico[c_nemici].riga][nemico[c_nemici].colonna-1].output==2)||(campo[nemico[c_nemici].riga][nemico[c_nemici].colonna-1].output==177))
                            nemico[c_nemici].colonna--;
                    }
                    else
                    {
                        if(nemico[c_nemici].colonna<you.colonna)
                            if((campo[nemico[c_nemici].riga][nemico[c_nemici].colonna+1].output==0)||(campo[nemico[c_nemici].riga][nemico[c_nemici].colonna+1].output==2)||(campo[nemico[c_nemici].riga][nemico[c_nemici].colonna+1].output==177))
                                nemico[c_nemici].colonna++;
                    }
                    cambia[c_nemici]=true;
            }
            else
            {
                if(cambia[c_nemici])
                {
                    if(nemico[c_nemici].riga>you.riga)
                    {
                        if((campo[nemico[c_nemici].riga-1][nemico[c_nemici].colonna].output==0)||(campo[nemico[c_nemici].riga-1][nemico[c_nemici].colonna].output==2)||(campo[nemico[c_nemici].riga-1][nemico[c_nemici].colonna].output==177))
                        nemico[c_nemici].riga--;
                    }
                    else
                    {
                        if(nemico[c_nemici].riga<you.riga)
                            if((campo[nemico[c_nemici].riga+1][nemico[c_nemici].colonna].output==0)||(campo[nemico[c_nemici].riga+1][nemico[c_nemici].colonna].output==2)||(campo[nemico[c_nemici].riga+1][nemico[c_nemici].colonna].output==177))
                                nemico[c_nemici].riga++;
                    }
                    cambia[c_nemici]=false;
                }
                else
                {
                    if(nemico[c_nemici].colonna>you.colonna)
                    {
                        if((campo[nemico[c_nemici].riga][nemico[c_nemici].colonna-1].output==0)||(campo[nemico[c_nemici].riga][nemico[c_nemici].colonna-1].output==2)||(campo[nemico[c_nemici].riga][nemico[c_nemici].colonna-1].output==177))
                            nemico[c_nemici].colonna--;
                    }
                    else
                    {
                        if(nemico[c_nemici].colonna<you.colonna)
                            if((campo[nemico[c_nemici].riga][nemico[c_nemici].colonna+1].output==0)||(campo[nemico[c_nemici].riga][nemico[c_nemici].colonna+1].output==2)||(campo[nemico[c_nemici].riga][nemico[c_nemici].colonna+1].output==177))
                                nemico[c_nemici].colonna++;
                        }
                    cambia[c_nemici]=true;
                }
            }

        if(campo[nemico[c_nemici].riga][nemico[c_nemici].colonna].output==2)
            dead=true;

        campo[nemico[c_nemici].riga][nemico[c_nemici].colonna].output=1;
        campo[nemico[c_nemici].riga][nemico[c_nemici].colonna].kill=true;
        campo[nemico[c_nemici].riga][nemico[c_nemici].colonna].check=false;
        campo[nemico[c_nemici].riga][nemico[c_nemici].colonna].priority=priority_nemico;
        campo[nemico[c_nemici].riga][nemico[c_nemici].colonna].colore=4;
        }

        c_nemici++;
}

void Emina()
{
    now=time(0);

    if((now-timer)>=timer_mine)
        hidden=true;
    else
        hidden=false;
}

void Eragni(int Rriga, int Rcolonna)
{
    if(campo[Rriga][Rcolonna+1].over==false || campo[Rriga][Rcolonna+1].priority>priority_ragnetti)
        direzioneRagnetti[Rriga-18]=true;

    if(campo[Rriga][Rcolonna-1].over==false || campo[Rriga][Rcolonna-1].priority>priority_ragnetti)
        direzioneRagnetti[Rriga-18]=false;

    if(direzioneRagnetti[Rriga-18])
    {
        campo[Rriga][Rcolonna].output=0;
        campo[Rriga][Rcolonna].kill=false;
        campo[Rriga][Rcolonna].colore=0;
        campo[Rriga][Rcolonna].priority=0;

        if(campo[Rriga][Rcolonna-1].output==2)
            dead=true;

        campo[Rriga][Rcolonna-1].output=15;
        campo[Rriga][Rcolonna-1].kill=true;
        campo[Rriga][Rcolonna-1].check=false;
        campo[Rriga][Rcolonna-1].colore=15;
        campo[Rriga][Rcolonna-1].priority=priority_ragnetti;
    }
    else
    {
        campo[Rriga][Rcolonna].output=0;
        campo[Rriga][Rcolonna].kill=false;
        campo[Rriga][Rcolonna].colore=0;
        campo[Rriga][Rcolonna].priority=0;

        if(campo[Rriga][Rcolonna+1].output==2)
            dead=true;

        campo[Rriga][Rcolonna+1].output=15;
        campo[Rriga][Rcolonna+1].kill=true;
        campo[Rriga][Rcolonna+1].check=false;
        campo[Rriga][Rcolonna+1].colore=15;
        campo[Rriga][Rcolonna+1].priority=priority_ragnetti;
    }
}

void testlv()
{
    cout<<"\nLIVELLO PROVA:";
    cin>>lv;
}

void posiziona(int rig_cuore, int col_cuore, int rig_you, int col_you)
{
    rigcuore=rig_cuore;
    colcuore=col_cuore;

    campo[rig_cuore][col_cuore].output=3;
    campo[rig_cuore][col_cuore].over=true;
    campo[rig_cuore][col_cuore].kill=false;
    campo[rig_cuore][col_cuore].priority=priority_cuore;
    campo[rig_cuore][col_cuore].colore=13;

    you.riga=rig_you;
    you.colonna=col_you;
}

void posizionaOstacoli(string nemico, int riga, int colonna)
{
    if(nemico=="cannonesx")
    {
        campo[riga][1].output=16;
        campo[riga][1].over=false;
        campo[riga][1].kill=false;
        campo[riga][1].colore=8;
    }
    if(nemico=="cannonedx")
    {
        campo[riga][38].output=17;
        campo[riga][38].over=false;
        campo[riga][38].kill=false;
        campo[riga][38].colore=8;
    }
    if(nemico=="laser")
    {
        campo[27][colonna].output=127;
        campo[27][colonna].over=false;
        campo[27][colonna].kill=false;
        campo[27][colonna].colore=3;
    }
    if(nemico=="mina")
    {
        campo[riga][colonna].output=157;
        campo[riga][colonna].over=true;
        campo[riga][colonna].kill=true;
        campo[riga][colonna].priority=priority_mina;
    }
    if(nemico=="flashbomb")
    {
        campo[riga][colonna].output=162;
        campo[riga][colonna].over=true;
        campo[riga][colonna].kill=false;
        campo[riga][colonna].priority=priority_flashbomb;
        campo[riga][colonna].colore=6;
    }
    if(nemico=="ragno")
    {
        campo[riga][colonna].output=15;
        campo[riga][colonna].over=true;
        campo[riga][colonna].kill=true;
        campo[riga][colonna].colore=15;
    }
}

void posizionaNemici(int Nriga, int Ncolonna)
{
    nemico[c_nemici_posizionati].riga=Nriga;
    nemico[c_nemici_posizionati].colonna=Ncolonna;

    campo[nemico[c_nemici_posizionati].riga][nemico[c_nemici_posizionati].colonna].output=1;
    campo[nemico[c_nemici_posizionati].riga][nemico[c_nemici_posizionati].colonna].kill=true;
    campo[nemico[c_nemici_posizionati].riga][nemico[c_nemici_posizionati].colonna].over=true;
    campo[nemico[c_nemici_posizionati].riga][nemico[c_nemici_posizionati].colonna].priority=priority_nemico;

    c_nemici_posizionati++;
}

void posizionaPalla(int Priga, int Pcolonna)
{
    palle[c_palle_posizionate].riga=Priga;
    palle[c_palle_posizionate].colonna=Pcolonna;
    palle[c_palle_posizionate].direzione=1;

    campo[palle[c_palle_posizionate].riga][palle[c_palle_posizionate].colonna].output=43;
    campo[palle[c_palle_posizionate].riga][palle[c_palle_posizionate].colonna].kill=true;
    campo[palle[c_palle_posizionate].riga][palle[c_palle_posizionate].colonna].over=true;
    campo[palle[c_palle_posizionate].riga][palle[c_palle_posizionate].colonna].priority=priority_palla;

    c_palle_posizionate++;
}

void posizionaLava(int Lriga, int Lcolonna)
{
    campo[Lriga][Lcolonna].lava=true;
    campo[Lriga][Lcolonna].colore=12;
}

void spara(int riga, int colonna)
{
    if(lv==41)
    {
        int i=riga-1;

        if(hidden && vitaBoss>0)
            chiudiMandibole();

        if((hidden==false)&&(colonna<23)&&(colonna>16)&&(chiudi==false))
            {
                vitaBoss--;
                colpito++;
                stampaVitaboss[vitaBoss]=0;
            }

        while(campo[i][colonna].over && campo[i][colonna].priority<=priority_yourlaser)
            {
                campo[i][colonna].output=179;
                campo[i][colonna].over=true;
                campo[i][colonna].kill=false;
                campo[i][colonna].colore=12;
                campo[i][colonna].priority=priority_yourlaser;

                i--;
            }
    }

    if(lv==21)
    {
        int i=riga-1;

        if(colonna==miniboss[13].coo.colonna || colonna==miniboss[14].coo.colonna || colonna==miniboss[15].coo.colonna)
            {
                vitaMiniboss--;
                stampaVitaMiniboss[vitaMiniboss]=0;
            }

        while(campo[i][colonna].over && campo[i][colonna].priority<=priority_yourlaser)
            {
                campo[i][colonna].output=179;
                campo[i][colonna].over=true;
                campo[i][colonna].kill=false;
                campo[i][colonna].colore=12;
                campo[i][colonna].priority=priority_yourlaser;

                i--;
            }
    }
}

void Miniboss()
{
    for(int i=0; i<16; i++)
    {
        campo[miniboss[i].coo.riga][miniboss[i].coo.colonna].output=0;
        campo[miniboss[i].coo.riga][miniboss[i].coo.colonna].over=true;
        campo[miniboss[i].coo.riga][miniboss[i].coo.colonna].colore=0;
    }

    if(miniboss[4].coo.colonna==38)
        dirMiniboss=true;

    if(miniboss[0].coo.colonna==1)
        dirMiniboss=false;

    if(miniboss[0].coo.riga==1)
        dirMinibossY=false;

    if(miniboss[15].coo.riga==20)
        dirMinibossY=true;

    if(dirMiniboss)
    {
        for(int i=0; i<16; i++)
        {
            miniboss[i].coo.colonna--;

            campo[miniboss[i].coo.riga][miniboss[i].coo.colonna].output=miniboss[i].out;
            campo[miniboss[i].coo.riga][miniboss[i].coo.colonna].over=false;
            if(miniboss[i].out==254)
                campo[miniboss[i].coo.riga][miniboss[i].coo.colonna].colore=12;
            else
                campo[miniboss[i].coo.riga][miniboss[i].coo.colonna].colore=8;
        }
    }
    else
    {
        for(int i=0; i<16; i++)
        {
            miniboss[i].coo.colonna++;

            campo[miniboss[i].coo.riga][miniboss[i].coo.colonna].output=miniboss[i].out;
            campo[miniboss[i].coo.riga][miniboss[i].coo.colonna].over=false;
            if(miniboss[i].out==254)
                campo[miniboss[i].coo.riga][miniboss[i].coo.colonna].colore=12;
            else
                campo[miniboss[i].coo.riga][miniboss[i].coo.colonna].colore=8;
        }
    }

    if(c%3==0)
    {
        for(int i=0; i<16; i++)
        {
            campo[miniboss[i].coo.riga][miniboss[i].coo.colonna].output=0;
            campo[miniboss[i].coo.riga][miniboss[i].coo.colonna].over=true;
            campo[miniboss[i].coo.riga][miniboss[i].coo.colonna].colore=0;
        }

        if(dirMinibossY)
        {
            for(int i=0; i<16; i++)
            {
                miniboss[i].coo.riga--;

                campo[miniboss[i].coo.riga][miniboss[i].coo.colonna].output=miniboss[i].out;
                campo[miniboss[i].coo.riga][miniboss[i].coo.colonna].over=false;
                if(miniboss[i].out==254)
                    campo[miniboss[i].coo.riga][miniboss[i].coo.colonna].colore=12;
                else
                    campo[miniboss[i].coo.riga][miniboss[i].coo.colonna].colore=8;
            }
        }
        else
        {
            for(int i=0; i<16; i++)
            {
                miniboss[i].coo.riga++;

                campo[miniboss[i].coo.riga][miniboss[i].coo.colonna].output=miniboss[i].out;
                campo[miniboss[i].coo.riga][miniboss[i].coo.colonna].over=false;
                if(miniboss[i].out==254)
                    campo[miniboss[i].coo.riga][miniboss[i].coo.colonna].colore=12;
                else
                    campo[miniboss[i].coo.riga][miniboss[i].coo.colonna].colore=8;
            }
        }
    }

    int a=rand();

    if(a%2==0)
        {
            campo[miniboss[14].coo.riga+1][miniboss[14].coo.colonna].output=31;
            campo[miniboss[14].coo.riga+1][miniboss[14].coo.colonna].kill=true;
            campo[miniboss[14].coo.riga+1][miniboss[14].coo.colonna].colore=14;
            campo[miniboss[14].coo.riga+1][miniboss[14].coo.colonna].priority=priority_minibossbullets;
        }

}

void attaccominiboss(int riga, int colonna)
{
    campo[riga][colonna].output=0;
    campo[riga][colonna].kill=false;
    campo[riga][colonna].colore=0;
    campo[riga][colonna].priority=0;

    if(campo[riga+1][colonna].over==true)
    {
        if(campo[riga+1][colonna].output==2)
            dead=true;

        campo[riga+1][colonna].output=31;
        campo[riga+1][colonna].kill=true;
        campo[riga+1][colonna].check=false;
        campo[riga+1][colonna].colore=14;
        campo[riga+1][colonna].priority=priority_minibossbullets;
    }
}

void costrusciminiboss()
{
        miniboss[0].out=218;
        miniboss[0].coo.riga=2;
        miniboss[0].coo.colonna=17;
        miniboss[1].out=196;
        miniboss[1].coo.riga=2;
        miniboss[1].coo.colonna=18;
        miniboss[2].out=196;
        miniboss[2].coo.riga=2;
        miniboss[2].coo.colonna=19;
        miniboss[3].out=196;
        miniboss[3].coo.riga=2;
        miniboss[3].coo.colonna=20;
        miniboss[4].out=191;
        miniboss[4].coo.riga=2;
        miniboss[4].coo.colonna=21;
        miniboss[5].out=179;
        miniboss[5].coo.riga=3;
        miniboss[5].coo.colonna=17;
        miniboss[6].out=254;
        miniboss[6].coo.riga=3;
        miniboss[6].coo.colonna=18;
        miniboss[7].out=254;
        miniboss[7].coo.riga=3;
        miniboss[7].coo.colonna=20;
        miniboss[8].out=179;
        miniboss[8].coo.riga=3;
        miniboss[8].coo.colonna=21;
        miniboss[9].out=192;
        miniboss[9].coo.riga=4;
        miniboss[9].coo.colonna=17;
        miniboss[10].out=191;
        miniboss[10].coo.riga=4;
        miniboss[10].coo.colonna=18;
        miniboss[11].out=218;
        miniboss[11].coo.riga=4;
        miniboss[11].coo.colonna=20;
        miniboss[12].out=217;
        miniboss[12].coo.riga=4;
        miniboss[12].coo.colonna=21;
        miniboss[13].out=192;
        miniboss[13].coo.riga=5;
        miniboss[13].coo.colonna=18;
        miniboss[14].out=193;
        miniboss[14].coo.riga=5;
        miniboss[14].coo.colonna=19;
        miniboss[15].out=217;
        miniboss[15].coo.riga=5;
        miniboss[15].coo.colonna=20;
}

void boss()
{

    int a=rand();

    if((usataBomba==true)&&(unaBombaSulCampo==false))
    {
        if(a%2==0)
            {
                int b=rand();

                if(b%2==0)
                {
                    posizionaOstacoli("flashbomb",7,6);
                    usataBomba=false;
                }
                else
                {
                    posizionaOstacoli("flashbomb",7,33);
                    usataBomba=false;
                }
            }
        if(a%2==1)
            {
                posizionaOstacoli("flashbomb",26,19);
                usataBomba=false;
            }
    }

    if(c_boss%frequenzaAttaccoBoss==0)
        attacckBoss=true;

    if(attacckBoss)
        attaccoBoss();

    if(colpito>6)
    {
        colpito=0;
        chiudi=true;

    }

    if((now-timer)>=timer_mine)
            chiudi=false;

    campo[9][15].output=0;
    campo[9][15].over=true;
    campo[9][15].colore=0;
    campo[10][15].output=0;
    campo[10][15].over=true;
    campo[10][15].colore=0;
    campo[11][15].output=0;
    campo[11][15].over=true;
    campo[11][15].colore=0;
    campo[9][24].output=0;
    campo[9][24].over=true;
    campo[9][24].colore=0;
    campo[10][24].output=0;
    campo[10][24].over=true;
    campo[10][24].colore=0;
    campo[11][24].output=0;
    campo[11][24].over=true;
    campo[11][24].colore=0;

    for(int i=16; i<24; i++)
    {
        campo[11][i].output=0;
        campo[11][i].over=true;
        campo[11][i].colore=0;
    }

    campo[9][15].output=205;
    campo[9][15].over=false;
    campo[9][15].colore=8;
    campo[9][14].output=201;
    campo[9][14].over=false;
    campo[9][14].colore=8;
    campo[10][14].output=186;
    campo[10][14].over=false;
    campo[10][14].colore=8;
    campo[11][14].output=200;
    campo[11][14].over=false;
    campo[11][14].colore=8;
    campo[11][15].output=205;
    campo[11][15].over=false;
    campo[11][15].colore=8;
    campo[11][16].output=205;
    campo[11][16].over=false;
    campo[11][16].colore=8;
    campo[11][23].output=205;
    campo[11][23].over=false;
    campo[11][23].colore=8;
    campo[11][24].output=205;
    campo[11][24].over=false;
    campo[11][24].colore=8;
    campo[11][25].output=188;
    campo[11][25].over=false;
    campo[11][25].colore=8;
    campo[10][25].output=186;
    campo[10][25].over=false;
    campo[10][25].colore=8;
    campo[9][24].output=205;
    campo[9][24].over=false;
    campo[9][24].colore=8;
    campo[9][25].output=187;
    campo[9][25].over=false;
    campo[9][25].colore=8;

    if(hidden==false)
    {
        campo[5][15].output=250;
        campo[5][24].output=250;
        campo[6][11].output=250;
        campo[6][28].output=250;
        campo[7][16].output=250;
        campo[7][23].output=250;
        campo[8][18].output=250;
        campo[8][21].output=250;

    }
    else
    {
        campo[5][15].output=219;
        campo[5][24].output=219;
        campo[6][11].output=219;
        campo[6][28].output=219;
        campo[7][16].output=219;
        campo[7][23].output=219;
        campo[8][18].output=219;
        campo[8][21].output=219;
    }

    if((c_boss%20)<10)
    {
        campo[12][6].output=0;
        campo[12][6].over=true;
        campo[12][6].colore=0;
        campo[12][7].output=0;
        campo[12][7].over=true;
        campo[12][7].colore=0;
        campo[12][5].output=0;
        campo[12][5].over=true;
        campo[12][5].colore=0;
        campo[12][32].output=0;
        campo[12][32].over=true;
        campo[12][32].colore=0;
        campo[12][34].output=0;
        campo[12][34].over=true;
        campo[12][34].colore=0;
        campo[12][33].output=0;
        campo[12][33].over=true;
        campo[12][33].colore=8;

        campo[13][9].output=0;
        campo[13][9].over=true;
        campo[13][9].colore=0;
        campo[13][7].output=0;
        campo[13][7].over=true;
        campo[13][7].colore=0;
        campo[13][8].output=0;
        campo[13][8].over=true;
        campo[13][8].colore=0;
        campo[13][30].output=0;
        campo[13][30].over=true;
        campo[13][30].colore=0;
        campo[13][31].output=0;
        campo[13][31].over=true;
        campo[13][31].colore=0;
        campo[13][32].output=0;
        campo[13][32].over=true;
        campo[13][32].colore=0;

        campo[14][9].output=0;
        campo[14][9].over=true;
        campo[14][9].colore=0;
        campo[14][10].output=0;
        campo[14][10].over=true;
        campo[14][10].colore=0;
        campo[14][11].output=0;
        campo[14][11].over=true;
        campo[14][11].colore=0;
        campo[14][12].output=0;
        campo[14][12].over=true;
        campo[14][12].colore=0;
        campo[14][30].output=0;
        campo[14][30].over=true;
        campo[14][30].colore=0;
        campo[14][29].output=0;
        campo[14][29].over=true;
        campo[14][29].colore=0;
        campo[14][28].output=0;
        campo[14][28].over=true;
        campo[14][28].colore=0;
        campo[14][27].output=0;
        campo[14][27].over=true;
        campo[14][27].colore=0;

        campo[15][12].output=0;
        campo[15][12].over=true;
        campo[15][12].colore=0;
        campo[15][13].output=0;
        campo[15][13].over=true;
        campo[15][13].colore=0;
        campo[15][14].output=0;
        campo[15][14].over=true;
        campo[15][14].colore=0;
        campo[15][25].output=0;
        campo[15][25].over=true;
        campo[15][25].colore=0;
        campo[15][26].output=0;
        campo[15][26].over=true;
        campo[15][26].colore=0;
        campo[15][27].output=0;
        campo[15][27].over=true;
        campo[15][27].colore=0;



        campo[12][6].output=219;
        campo[12][6].over=false;
        campo[12][6].colore=8;
        campo[12][4].output=219;
        campo[12][4].over=false;
        campo[12][4].colore=8;
        campo[12][5].output=219;
        campo[12][5].over=false;
        campo[12][5].colore=8;
        campo[12][35].output=219;
        campo[12][35].over=false;
        campo[12][35].colore=8;
        campo[12][34].output=219;
        campo[12][34].over=false;
        campo[12][34].colore=8;
        campo[12][33].output=219;
        campo[12][33].over=false;
        campo[12][33].colore=8;

        campo[13][6].output=219;
        campo[13][6].over=false;
        campo[13][6].colore=8;
        campo[13][7].output=219;
        campo[13][7].over=false;
        campo[13][7].colore=8;
        campo[13][5].output=219;
        campo[13][5].over=false;
        campo[13][5].colore=8;
        campo[13][32].output=219;
        campo[13][32].over=false;
        campo[13][32].colore=8;
        campo[13][34].output=219;
        campo[13][34].over=false;
        campo[13][34].colore=8;
        campo[13][33].output=219;
        campo[13][33].over=false;
        campo[13][33].colore=8;

        campo[14][6].output=219;
        campo[14][6].over=false;
        campo[14][6].colore=8;
        campo[14][7].output=219;
        campo[14][7].over=false;
        campo[14][7].colore=8;
        campo[14][8].output=219;
        campo[14][8].over=false;
        campo[14][8].colore=8;
        campo[14][9].output=219;
        campo[14][9].over=false;
        campo[14][9].colore=8;
        campo[14][30].output=219;
        campo[14][30].over=false;
        campo[14][30].colore=8;
        campo[14][31].output=219;
        campo[14][31].over=false;
        campo[14][31].colore=8;
        campo[14][32].output=219;
        campo[14][32].over=false;
        campo[14][32].colore=8;
        campo[14][33].output=219;
        campo[14][33].over=false;
        campo[14][33].colore=8;

        campo[15][10].output=219;
        campo[15][10].over=false;
        campo[15][10].colore=8;
        campo[15][8].output=219;
        campo[15][8].over=false;
        campo[15][8].colore=8;
        campo[15][9].output=219;
        campo[15][9].over=false;
        campo[15][9].colore=8;
        campo[15][31].output=219;
        campo[15][31].over=false;
        campo[15][31].colore=8;
        campo[15][30].output=219;
        campo[15][30].over=false;
        campo[15][30].colore=8;
        campo[15][29].output=219;
        campo[15][29].over=false;
        campo[15][29].colore=8;
    }
    else
    {
        campo[12][6].output=0;
        campo[12][6].over=true;
        campo[12][6].colore=0;
        campo[12][4].output=0;
        campo[12][4].over=true;
        campo[12][4].colore=0;
        campo[12][5].output=0;
        campo[12][5].over=true;
        campo[12][5].colore=0;
        campo[12][35].output=0;
        campo[12][35].over=true;
        campo[12][35].colore=0;
        campo[12][34].output=0;
        campo[12][34].over=true;
        campo[12][34].colore=0;
        campo[12][33].output=0;
        campo[12][33].over=true;
        campo[12][33].colore=0;

        campo[13][6].output=0;
        campo[13][6].over=true;
        campo[13][6].colore=0;
        campo[13][7].output=0;
        campo[13][7].over=true;
        campo[13][7].colore=0;
        campo[13][5].output=0;
        campo[13][5].over=true;
        campo[13][5].colore=0;
        campo[13][32].output=0;
        campo[13][32].over=true;
        campo[13][32].colore=0;
        campo[13][34].output=0;
        campo[13][34].over=true;
        campo[13][34].colore=0;
        campo[13][33].output=0;
        campo[13][33].over=true;
        campo[13][33].colore=0;

        campo[14][6].output=0;
        campo[14][6].over=true;
        campo[14][6].colore=0;
        campo[14][7].output=0;
        campo[14][7].over=true;
        campo[14][7].colore=0;
        campo[14][8].output=0;
        campo[14][8].over=true;
        campo[14][8].colore=0;
        campo[14][9].output=0;
        campo[14][9].over=true;
        campo[14][9].colore=0;
        campo[14][30].output=0;
        campo[14][30].over=true;
        campo[14][30].colore=0;
        campo[14][31].output=0;
        campo[14][31].over=true;
        campo[14][31].colore=0;
        campo[14][32].output=0;
        campo[14][32].over=true;
        campo[14][32].colore=0;
        campo[14][33].output=0;
        campo[14][33].over=true;
        campo[14][33].colore=0;

        campo[15][10].output=0;
        campo[15][10].over=true;
        campo[15][10].colore=0;
        campo[15][8].output=0;
        campo[15][8].over=true;
        campo[15][8].colore=0;
        campo[15][9].output=0;
        campo[15][9].over=true;
        campo[15][9].colore=0;
        campo[15][31].output=0;
        campo[15][31].over=true;
        campo[15][31].colore=0;
        campo[15][30].output=0;
        campo[15][30].over=true;
        campo[15][30].colore=0;
        campo[15][29].output=0;
        campo[15][29].over=true;
        campo[15][29].colore=0;

        campo[12][6].output=219;
        campo[12][6].over=false;
        campo[12][6].colore=8;
        campo[12][7].output=219;
        campo[12][7].over=false;
        campo[12][7].colore=8;
        campo[12][5].output=219;
        campo[12][5].over=false;
        campo[12][5].colore=8;
        campo[12][32].output=219;
        campo[12][32].over=false;
        campo[12][32].colore=8;
        campo[12][34].output=219;
        campo[12][34].over=false;
        campo[12][34].colore=8;
        campo[12][33].output=219;
        campo[12][33].over=false;
        campo[12][33].colore=8;

        campo[13][9].output=219;
        campo[13][9].over=false;
        campo[13][9].colore=8;
        campo[13][7].output=219;
        campo[13][7].over=false;
        campo[13][7].colore=8;
        campo[13][8].output=219;
        campo[13][8].over=false;
        campo[13][8].colore=8;
        campo[13][30].output=219;
        campo[13][30].over=false;
        campo[13][30].colore=8;
        campo[13][31].output=219;
        campo[13][31].over=false;
        campo[13][31].colore=8;
        campo[13][32].output=219;
        campo[13][32].over=false;
        campo[13][32].colore=8;

        campo[14][9].output=219;
        campo[14][9].over=false;
        campo[14][9].colore=8;
        campo[14][10].output=219;
        campo[14][10].over=false;
        campo[14][10].colore=8;
        campo[14][11].output=219;
        campo[14][11].over=false;
        campo[14][11].colore=8;
        campo[14][12].output=219;
        campo[14][12].over=false;
        campo[14][12].colore=8;
        campo[14][30].output=219;
        campo[14][30].over=false;
        campo[14][30].colore=8;
        campo[14][29].output=219;
        campo[14][29].over=false;
        campo[14][29].colore=8;
        campo[14][28].output=219;
        campo[14][28].over=false;
        campo[14][28].colore=8;
        campo[14][27].output=219;
        campo[14][27].over=false;
        campo[14][27].colore=8;

        campo[15][12].output=219;
        campo[15][12].over=false;
        campo[15][12].colore=8;
        campo[15][13].output=219;
        campo[15][13].over=false;
        campo[15][13].colore=8;
        campo[15][14].output=219;
        campo[15][14].over=false;
        campo[15][14].colore=8;
        campo[15][25].output=219;
        campo[15][25].over=false;
        campo[15][25].colore=8;
        campo[15][26].output=219;
        campo[15][26].over=false;
        campo[15][26].colore=8;
        campo[15][27].output=219;
        campo[15][27].over=false;
        campo[15][27].colore=8;
    }



    if(c_boss==frequenzaAttaccoBoss)
        c_boss=0;
    else
        c_boss++;
}

void attaccoBoss()
{
    int g=c_boss+10;

    if(c_boss!=0)
    {
        for(int i=15; i<25; i++)
        {
            if((i==15)||(i==16)||(i==23)||(i==24))
            {
                if(campo[g-2][i].priority<priority_venom)
                {
                    campo[g-2][i].output=0;
                    campo[g-2][i].kill=false;
                    campo[g-2][i].colore=0;
                }
            }
            else
            {
                if(campo[g-1][i].priority<priority_venom)
                {
                    campo[g-1][i].output=0;
                    campo[g-1][i].kill=false;
                    campo[g-1][i].colore=0;
                }
            }
        }
    }

    for(int i=0; i<4; i++)
        for(int j=15; j<25; j++)
        {
            if(g+i<28)
            {
                if((j==15)||(j==16)||(j==23)||(j==24))
                {
                    if(campo[g+i-1][j].priority<priority_venom && campo[g+i-1][j].over==true)
                    {
                        if(campo[g+i-1][j].output==2)
                            dead=true;

                        campo[g+i-1][j].output=177;
                        campo[g+i-1][j].kill=true;
                        campo[g+i-1][j].colore=2;
                    }
                }
                else
                {
                    if(campo[g+i][j].priority<priority_venom && campo[g+i][j].over==true)
                    {
                        if(campo[g+i][j].output==2)
                            dead=true;

                        campo[g+i][j].output=177;
                        campo[g+i][j].kill=true;
                        campo[g+i][j].colore=2;
                    }
                }
            }
        }

    if(g==27)
        {
            attacckBoss=false;
            for(int i=15; i<25; i++)
            {
            if((i==15)||(i==16)||(i==23)||(i==24))
            {
                campo[26][i].output=0;
                campo[26][i].kill=false;
                campo[26][i].colore=0;
            }
            }
        }


}

void chiudiMandibole()
{
    campo[9][15].output=0;
    campo[9][15].over=true;
    campo[9][15].colore=0;
    campo[9][14].output=0;
    campo[9][14].over=true;
    campo[9][14].colore=0;
    campo[10][14].output=0;
    campo[10][14].over=true;
    campo[10][14].colore=0;
    campo[11][14].output=0;
    campo[11][14].over=true;
    campo[11][14].colore=0;
    campo[11][15].output=0;
    campo[11][15].over=true;
    campo[11][15].colore=0;
    campo[11][16].output=0;
    campo[11][16].over=true;
    campo[11][16].colore=0;
    campo[11][23].output=0;
    campo[11][23].over=true;
    campo[11][23].colore=0;
    campo[11][24].output=0;
    campo[11][24].over=true;
    campo[11][24].colore=0;
    campo[11][25].output=0;
    campo[11][25].over=true;
    campo[11][25].colore=0;
    campo[10][25].output=0;
    campo[10][25].over=true;
    campo[10][25].colore=0;
    campo[9][24].output=0;
    campo[9][24].over=true;
    campo[9][24].colore=0;
    campo[9][25].output=0;
    campo[9][25].over=true;
    campo[9][25].colore=0;

    campo[9][15].output=201;
    campo[9][15].over=false;
    campo[9][15].colore=8;
    campo[10][15].output=186;
    campo[10][15].over=false;
    campo[10][15].colore=8;
    campo[11][15].output=200;
    campo[11][15].over=false;
    campo[11][15].colore=8;
    campo[9][24].output=187;
    campo[9][24].over=false;
    campo[9][24].colore=8;
    campo[10][24].output=186;
    campo[10][24].over=false;
    campo[10][24].colore=8;
    campo[11][24].output=188;
    campo[11][24].over=false;
    campo[11][24].colore=8;

    for(int i=16; i<24; i++)
    {
        campo[11][i].output=205;
        campo[11][i].over=false;
        campo[11][i].colore=8;
    }
}

void costruisciBoss()
{
    for(int i=1; i<39;i++)
    {
        campo[1][i].output=219;
        campo[1][i].over=false;
        campo[1][i].colore=8;
    }
    for(int i=1; i<39;i++)
    {
        campo[2][i].output=219;
        campo[2][i].over=false;
        campo[2][i].colore=8;
    }
    for(int i=1; i<39;i++)
    {
        if((i!=2)&&(i!=37))
           {
                campo[3][i].output=219;
                campo[3][i].over=false;
                campo[3][i].colore=8;
           }
    }
    for(int i=1; i<39;i++)
    {
        if((i!=2)&&(i!=37)&&(i!=3)&&(i!=36)&&(i!=4)&&(i!=35))
           {
                campo[4][i].output=219;
                campo[4][i].over=false;
                campo[4][i].colore=8;
           }
    }
    for(int i=1; i<39;i++)
    {
        if((i!=3)&&(i!=4)&&(i!=5)&&(i!=6)&&(i!=7)&&(i!=8)&&(i!=36)&&(i!=31)&&(i!=32)&&(i!=33)&&(i!=34)&&(i!=35))
           {
                campo[5][i].output=219;
                campo[5][i].over=false;
                campo[5][i].colore=8;
           }
    }
    for(int i=1; i<39;i++)
    {
        if((i!=3)&&(i!=4)&&(i!=5)&&(i!=6)&&(i!=7)&&(i!=8)&&(i!=36)&&(i!=31)&&(i!=32)&&(i!=33)&&(i!=34)&&(i!=35))
           {
                campo[6][i].output=219;
                campo[6][i].over=false;
                campo[6][i].colore=8;
           }
    }
    for(int i=1; i<39;i++)
    {
        if((i!=3)&&(i!=4)&&(i!=5)&&(i!=6)&&(i!=7)&&(i!=8)&&(i!=9)&&(i!=30)&&(i!=31)&&(i!=32)&&(i!=33)&&(i!=34)&&(i!=35)&&(i!=36))
           {
                campo[7][i].output=219;
                campo[7][i].over=false;
                campo[7][i].colore=8;
           }
    }
    for(int i=1; i<39;i++)
    {
        if((i!=7)&&(i!=8)&&(i!=11)&&(i!=9)&&(i!=10)&&(i!=32)&&(i!=4)&&(i!=35)&&(i!=5)&&(i!=34)&&(i!=6)&&(i!=33)&&(i!=31)&&(i!=30)&&(i!=29)&&(i!=28))
           {
                campo[8][i].output=219;
                campo[8][i].over=false;
                campo[8][i].colore=8;
           }
    }
    for(int i=1;i<39;i++)
    {
        if((i==1)||(i==2)||(i==3)||(i==4)||(i==16)||(i==17)||(i==18)||(i==19)||(i==20)||(i==21)||(i==22)||(i==23)||(i==35)||(i==36)||(i==37)||(i==38))
        {
            campo[9][i].output=219;
            campo[9][i].over=false;
            campo[9][i].colore=8;
        }
    }
    for(int i=1;i<39;i++)
    {
        if((i==2)||(i==3)||(i==4)||(i==35)||(i==36)||(i==37))
        {
            campo[10][i].output=219;
            campo[10][i].over=false;
            campo[10][i].colore=8;
        }
    }

    campo[11][3].output=219;
    campo[11][3].over=false;
    campo[11][3].colore=8;
    campo[11][4].output=219;
    campo[11][4].over=false;
    campo[11][4].colore=8;
    campo[11][5].output=219;
    campo[11][5].over=false;
    campo[11][5].colore=8;
    campo[11][35].output=219;
    campo[11][35].over=false;
    campo[11][35].colore=8;
    campo[11][36].output=219;
    campo[11][36].over=false;
    campo[11][36].colore=8;
    campo[11][34].output=219;
    campo[11][34].over=false;
    campo[11][34].colore=8;

    campo[12][6].output=219;
    campo[12][6].over=false;
    campo[12][6].colore=8;
    campo[12][4].output=219;
    campo[12][4].over=false;
    campo[12][4].colore=8;
    campo[12][5].output=219;
    campo[12][5].over=false;
    campo[12][5].colore=8;
    campo[12][35].output=219;
    campo[12][35].over=false;
    campo[12][35].colore=8;
    campo[12][34].output=219;
    campo[12][34].over=false;
    campo[12][34].colore=8;
    campo[12][33].output=219;
    campo[12][33].over=false;
    campo[12][33].colore=8;

    campo[13][6].output=219;
    campo[13][6].over=false;
    campo[13][6].colore=8;
    campo[13][7].output=219;
    campo[13][7].over=false;
    campo[13][7].colore=8;
    campo[13][5].output=219;
    campo[13][5].over=false;
    campo[13][5].colore=8;
    campo[13][32].output=219;
    campo[13][32].over=false;
    campo[13][32].colore=8;
    campo[13][34].output=219;
    campo[13][34].over=false;
    campo[13][34].colore=8;
    campo[13][33].output=219;
    campo[13][33].over=false;
    campo[13][33].colore=8;

    campo[14][6].output=219;
    campo[14][6].over=false;
    campo[14][6].colore=8;
    campo[14][7].output=219;
    campo[14][7].over=false;
    campo[14][7].colore=8;
    campo[14][8].output=219;
    campo[14][8].over=false;
    campo[14][8].colore=8;
    campo[14][9].output=219;
    campo[14][9].over=false;
    campo[14][9].colore=8;
    campo[14][30].output=219;
    campo[14][30].over=false;
    campo[14][30].colore=8;
    campo[14][31].output=219;
    campo[14][31].over=false;
    campo[14][31].colore=8;
    campo[14][32].output=219;
    campo[14][32].over=false;
    campo[14][32].colore=8;
    campo[14][33].output=219;
    campo[14][33].over=false;
    campo[14][33].colore=8;

    campo[15][1].output=219;
    campo[15][1].over=false;
    campo[15][1].colore=8;
    campo[15][10].output=219;
    campo[15][10].over=false;
    campo[15][10].colore=8;
    campo[15][8].output=219;
    campo[15][8].over=false;
    campo[15][8].colore=8;
    campo[15][9].output=219;
    campo[15][9].over=false;
    campo[15][9].colore=8;
    campo[15][38].output=219;
    campo[15][38].over=false;
    campo[15][38].colore=8;
    campo[15][31].output=219;
    campo[15][31].over=false;
    campo[15][31].colore=8;
    campo[15][30].output=219;
    campo[15][30].over=false;
    campo[15][30].colore=8;
    campo[15][29].output=219;
    campo[15][29].over=false;
    campo[15][29].colore=8;

    campo[16][1].output=219;
    campo[16][1].over=false;
    campo[16][1].colore=8;
    campo[16][2].output=219;
    campo[16][2].over=false;
    campo[16][2].colore=8;
    campo[16][37].output=219;
    campo[16][37].over=false;
    campo[16][37].colore=8;
    campo[16][38].output=219;
    campo[16][38].over=false;
    campo[16][38].colore=8;

    campo[17][2].output=219;
    campo[17][2].over=false;
    campo[17][2].colore=8;
    campo[17][3].output=219;
    campo[17][3].over=false;
    campo[17][3].colore=8;
    campo[17][37].output=219;
    campo[17][37].over=false;
    campo[17][37].colore=8;
    campo[17][36].output=219;
    campo[17][36].over=false;
    campo[17][36].colore=8;

    campo[5][15].colore=12;
    campo[5][24].colore=12;
    campo[6][11].colore=12;
    campo[6][28].colore=12;
    campo[7][16].colore=12;
    campo[7][23].colore=12;
    campo[8][18].colore=12;
    campo[8][21].colore=12;

    campo[9][15].output=205;
    campo[9][15].over=false;
    campo[9][15].colore=8;
    campo[9][14].output=201;
    campo[9][14].over=false;
    campo[9][14].colore=8;
    campo[10][14].output=186;
    campo[10][14].over=false;
    campo[10][14].colore=8;
    campo[11][14].output=200;
    campo[11][14].over=false;
    campo[11][14].colore=8;
    campo[11][15].output=205;
    campo[11][15].over=false;
    campo[11][15].colore=8;
    campo[11][16].output=205;
    campo[11][16].over=false;
    campo[11][16].colore=8;
    campo[11][23].output=205;
    campo[11][23].over=false;
    campo[11][23].colore=8;
    campo[11][24].output=205;
    campo[11][24].over=false;
    campo[11][24].colore=8;
    campo[11][25].output=188;
    campo[11][25].over=false;
    campo[11][25].colore=8;
    campo[10][25].output=186;
    campo[10][25].over=false;
    campo[10][25].colore=8;
    campo[9][24].output=205;
    campo[9][24].over=false;
    campo[9][24].colore=8;
    campo[9][25].output=187;
    campo[9][25].over=false;
    campo[9][25].colore=8;
}

void lava()
{
    switch(lv)
    {
        case 30:
            {for(int i=1; i<39; i++)
                posizionaLava(1,i);

            for(int i=1; i<39; i++)
                if(i!=2 && i!=3 && i!=4 && i!=1)
                    posizionaLava(5,i);

            for(int i=1; i<39; i++)
                if(i!=37 && i!=36 && i!=35 && i!=38)
                    posizionaLava(9,i);

            for(int i=1; i<39; i++)
                if(i!=2 && i!=3 && i!=4 && i!=1)
                    posizionaLava(13,i);

            for(int i=1; i<39; i++)
                if(i!=37 && i!=36 && i!=35 && i!=38)
                    posizionaLava(17,i);}
        break;
        case 31:
            posizionaLava(1,18);
            posizionaLava(1,19);
            posizionaLava(1,20);
            posizionaLava(1,21);
            posizionaLava(1,22);
            posizionaLava(2,18);
            posizionaLava(2,22);
            posizionaLava(3,18);
            posizionaLava(3,20);
            posizionaLava(3,22);
            posizionaLava(4,18);
            posizionaLava(4,20);
            posizionaLava(4,22);
            posizionaLava(5,18);
            posizionaLava(5,20);
            posizionaLava(5,22);
            posizionaLava(6,18);
            posizionaLava(6,20);
            posizionaLava(6,22);
            posizionaLava(7,18);
            posizionaLava(7,20);
            posizionaLava(7,22);
            posizionaLava(8,18);
            posizionaLava(8,20);
            posizionaLava(8,22);
            posizionaLava(9,18);
            posizionaLava(9,20);
            posizionaLava(9,22);
            posizionaLava(10,18);
            posizionaLava(10,20);
            posizionaLava(10,22);
            posizionaLava(11,18);
            posizionaLava(11,20);
            posizionaLava(11,22);
            posizionaLava(12,18);
            posizionaLava(12,17);
            posizionaLava(12,22);
            posizionaLava(13,17);
            posizionaLava(13,22);
            posizionaLava(13,21);
            posizionaLava(13,21);
            posizionaLava(13,20);
            posizionaLava(14,17);
            posizionaLava(14,18);
            posizionaLava(14,21);
            posizionaLava(15,21);
            posizionaLava(15,17);
            posizionaLava(15,20);
            posizionaLava(16,17);
            posizionaLava(16,18);
            posizionaLava(16,21);
            posizionaLava(17,21);
            posizionaLava(17,17);
            posizionaLava(17,20);
            posizionaLava(18,17);
            posizionaLava(18,18);
            posizionaLava(18,21);
            posizionaLava(19,22);
            posizionaLava(19,21);
            posizionaLava(19,17);
            posizionaLava(19,20);
            posizionaLava(20,17);
            posizionaLava(20,18);
            posizionaLava(20,22);
            posizionaLava(21,16);
            posizionaLava(21,17);
            posizionaLava(21,18);
            posizionaLava(21,20);
            posizionaLava(21,22);
            posizionaLava(22,16);
            posizionaLava(22,22);
            posizionaLava(23,16);
            posizionaLava(23,18);
            posizionaLava(23,20);
            posizionaLava(23,21);
            posizionaLava(23,22);
            posizionaLava(24,16);
            posizionaLava(24,22);
            posizionaLava(25,17);
            posizionaLava(25,16);
            posizionaLava(25,18);
            posizionaLava(25,20);
            posizionaLava(25,22);
            posizionaLava(26,22);
            posizionaLava(27,16);
            posizionaLava(27,17);
            posizionaLava(27,18);
            posizionaLava(27,20);
            posizionaLava(27,21);
            posizionaLava(27,22);
        break;
        case 32:
            {for(int i=1; i<28; i++)
                for(int j=1; j<39; j++)
                    if((i%2==0)&&(j%2==0))
                        posizionaLava(i,j);}
        break;
        case 33:
            {for(int i=1; i<39; i++)
                if((i%12==2)||(i%12==3)||(i%12==4)||(i%12==5)||(i%12==6))
                    posizionaLava(9,i);
            for(int i=1; i<39; i++)
                if((i%12==2)||(i%12==6))
                    posizionaLava(10,i);

            for(int i=1; i<39; i++)
                if((i%12==2)||(i%12==4)||(i%12==6))
                    posizionaLava(11,i);

            for(int i=1; i<39; i++)
                if((i%12!=3)&&(i%12!=5))
                    posizionaLava(12,i);

            for(int i=1; i<39; i++)
                if((i%12==4)||(i%12==6))
                    posizionaLava(13,i);

            for(int i=1; i<39; i++)
                if((i%12!=7)&&(i%12!=5))
                    posizionaLava(14,i);

            for(int i=1; i<39; i++)
                if((i%12==7)||(i%12==8)||(i%12==4)||(i%12==5)||(i%12==6))
                    posizionaLava(18,i);
            for(int i=1; i<39; i++)
                if((i%12==4)||(i%12==8))
                    posizionaLava(17,i);

            for(int i=1; i<39; i++)
                if((i%12==8)||(i%12==4)||(i%12==6))
                    posizionaLava(16,i);

            for(int i=1; i<39; i++)
                if((i%12!=7)&&(i%12!=5))
                    posizionaLava(15,i);}
        break;
        case 34:
            {for(int i=1; i<37;i++)
                if((i%6)!=0)
                    {
                        posizionaLava(10,i);
                        posizionaLava(14,i);
                    }

            for(int i=1; i<37;i++)
                if((i%6!=2)&&(i%6!=3)&&(i%6!=4))
                    {
                        posizionaLava(11,i);
                        posizionaLava(13,i);
                    }

            for(int i=1; i<37;i++)
                if((i%6)==3)
                    posizionaLava(12,i);

            posizionaLava(11,37);
            posizionaLava(11,38);
            posizionaLava(13,38);
            posizionaLava(13,37);}
        break;
        case 39:
            {for(int i=1; i<39;i++)
                posizionaLava(1,i);

            for(int i=1; i<39;i++)
                if((i!=1)&&(i!=2)&&(i!=2)&&(i!=3)&&(i!=4)&&(i!=5))
                    posizionaLava(27,i);

            for(int i=1; i<28;i++)
                if((i!=23)&&(i!=24)&&(i!=25)&&(i!=26)&&(i!=27))
                    posizionaLava(i,1);

            for(int i=1; i<28;i++)
                posizionaLava(i,38);

            int colonne[413]={  14,21,34, //2
                                3,4,5,6,7,8,9,10,11,13,14,16,17,18,19,21,23,24,25,27,28,29,30,31,32,33,34,36,37,
                                4,11,14,16,19,25,28,34,36, //4
                                3,4,6,7,8,9,11,13,14,16,17,19,20,21,22,23,25,26,28,30,32,34,36,
                                3,6,9,11,13,16,23,25,28,30,32,34,36, //6
                                3,5,6,8,9,11,13,15,16,18,19,20,21,23,25,27,28,30,32,34,36,
                                3,5,8,11,13,15,18,21,23,25,27,30,32,36, //8
                                3,5,7,8,10,11,13,15,17,18,20,21,23,25,27,29,30,32,33,34,35,36,
                                3,5,8,10,13,15,17,18,23,25,27,29,32,36, //10
                                3,5,6,8,10,12,13,15,18,19,20,21,22,23,25,27,29,31,32,34,36, //12
                                3,8,10,13,15,16,19,25,27,29,31,34,36,
                                3,5,6,8,10,13,16,17,19,21,22,23,24,25,27,29,33,34,36,//14
                                3,5,8,10,12,13,14,17,19,21,23,27,29,30,31,32,33,34,36,
                                3,5,6,8,10,14,15,17,19,21,23,25,26,27,32,36,//16
                                3,6,8,10,11,12,15,17,19,21,23,27,28,29,30,32,34,36,
                                3,6,8,12,13,15,17,19,23,25,28,30,32,33,34,35,36,//18
                                3,5,6,8,9,10,13,15,17,19,21,23,25,28,30,32,
                                3,5,10,11,13,15,17,19,21,23,24,25,26,28,30,32,34,35,36,37,//20
                                3,5,6,7,8,11,13,15,17,19,21,26,28,30,
                                8,9,11,13,15,17,19,21,22,23,24,26,28,30,31,32,33,34,35,36,//22
                                2,4,5,6,11,13,15,17,19,24,26,36,
                                6,8,10,11,13,15,17,19,20,21,22,24,26,27,29,30,31,32,33,34,35,36,//24
                                6,8,11,13,15,17,22,24,29,
                                6,8,9,10,11,13,14,15,17,18,19,20,22,24,25,26,27,28,29,31,33,34,35,36,37,
                                6,11,22,31};
            int righe[413]={2,2,2,
                            3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,
                            4,4,4,4,4,4,4,4,4,
                            5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
                            6,6,6,6,6,6,6,6,6,6,6,6,6,
                            7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
                            8,8,8,8,8,8,8,8,8,8,8,8,8,8,
                            9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,
                            10,10,10,10,10,10,10,10,10,10,10,10,10,10,
                            11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,
                            12,12,12,12,12,12,12,12,12,12,12,12,12,
                            13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,
                            14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,
                            15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,
                            16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,
                            17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,
                            18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,
                            19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,
                            20,20,20,20,20,20,20,20,20,20,20,20,20,20,
                            21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,
                            22,22,22,22,22,22,22,22,22,22,22,22,
                            23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,
                            24,24,24,24,24,24,24,24,24,
                            25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,
                            26,26,26,26};

            for(int i=0; i<413;i++)
                posizionaLava(righe[i],colonne[i]);}
        break;
        case 41:
            {
                for(int i=1; i<39; i++)
                    posizionaLava(27,i);
                for(int i=1; i<39; i++)
                    if((i!=15)&&(i!=16)&&(i!=17)&&(i!=18)&&(i!=19)&&(i!=20)&&(i!=21)&&(i!=22)&&(i!=23)&&(i!=24))
                        posizionaLava(26,i);
            }
        break;
    }
}

void mine()
{
    switch(lv)
    {
    case 22:
        {posizionaOstacoli("mina",13,19);
        posizionaOstacoli("mina",22,10);
        posizionaOstacoli("mina",4,30);
        posizionaOstacoli("mina",10,20);
        posizionaOstacoli("mina",8,18);
        posizionaOstacoli("mina",5,5);}
    break;
    case 23:
        {for(int i=1; i<col-2;i++)
            if(i!=27)
                posizionaOstacoli("mina",10,i);}
    break;
    case 24:
        {posizionaOstacoli("mina",1,32);
        posizionaOstacoli("mina",1,5);
        posizionaOstacoli("mina",2,21);
        posizionaOstacoli("mina",2,25);
        posizionaOstacoli("mina",3,19);
        posizionaOstacoli("mina",3,6);
        posizionaOstacoli("mina",4,25);
        posizionaOstacoli("mina",4,29);
        posizionaOstacoli("mina",5,3);
        posizionaOstacoli("mina",5,19);
        posizionaOstacoli("mina",6,7);
        posizionaOstacoli("mina",6,11);
        posizionaOstacoli("mina",7,1);
        posizionaOstacoli("mina",7,35);
        posizionaOstacoli("mina",8,15);
        posizionaOstacoli("mina",8,36);
        posizionaOstacoli("mina",9,25);
        posizionaOstacoli("mina",9,14);
        posizionaOstacoli("mina",10,36);
        posizionaOstacoli("mina",10,24);
        posizionaOstacoli("mina",11,38);
        posizionaOstacoli("mina",11,5);
        posizionaOstacoli("mina",12,10);
        posizionaOstacoli("mina",12,22);
        posizionaOstacoli("mina",13,34);
        posizionaOstacoli("mina",13,20);
        posizionaOstacoli("mina",14,15);
        posizionaOstacoli("mina",14,11);
        posizionaOstacoli("mina",15,22);
        posizionaOstacoli("mina",15,9);
        posizionaOstacoli("mina",16,38);
        posizionaOstacoli("mina",16,25);
        posizionaOstacoli("mina",17,22);
        posizionaOstacoli("mina",17,9);
        posizionaOstacoli("mina",18,1);
        posizionaOstacoli("mina",18,30);
        posizionaOstacoli("mina",19,28);
        posizionaOstacoli("mina",19,8);
        posizionaOstacoli("mina",20,11);
        posizionaOstacoli("mina",20,17);
        posizionaOstacoli("mina",21,13);
        posizionaOstacoli("mina",21,16);
        posizionaOstacoli("mina",22,23);
        posizionaOstacoli("mina",22,36);
        posizionaOstacoli("mina",23,16);
        posizionaOstacoli("mina",23,23);
        posizionaOstacoli("mina",24,36);
        posizionaOstacoli("mina",25,16);
        posizionaOstacoli("mina",25,18);
        posizionaOstacoli("mina",26,5);
        posizionaOstacoli("mina",26,17);
        posizionaOstacoli("mina",27,29);
        posizionaOstacoli("mina",27,20);
        posizionaOstacoli("mina",27,36);
        posizionaOstacoli("mina",26,38);}
    break;
    case 25:
        {posizionaOstacoli("mina",6,1);
        posizionaOstacoli("mina",6,5);
        posizionaOstacoli("mina",6,23);
        posizionaOstacoli("mina",6,10);
        posizionaOstacoli("mina",6,27);
        posizionaOstacoli("mina",6,15);
        posizionaOstacoli("mina",6,19);
        posizionaOstacoli("mina",6,34);
        posizionaOstacoli("mina",6,36);
        posizionaOstacoli("mina",6,22);
        posizionaOstacoli("mina",9,4);
        posizionaOstacoli("mina",9,8);
        posizionaOstacoli("mina",9,9);
        posizionaOstacoli("mina",9,15);
        posizionaOstacoli("mina",9,17);
        posizionaOstacoli("mina",9,21);
        posizionaOstacoli("mina",9,22);
        posizionaOstacoli("mina",9,29);
        posizionaOstacoli("mina",9,33);
        posizionaOstacoli("mina",9,26);
        posizionaOstacoli("mina",12,2);
        posizionaOstacoli("mina",12,5);
        posizionaOstacoli("mina",12,9);
        posizionaOstacoli("mina",12,14);
        posizionaOstacoli("mina",12,17);
        posizionaOstacoli("mina",12,18);
        posizionaOstacoli("mina",12,22);
        posizionaOstacoli("mina",12,23);
        posizionaOstacoli("mina",12,31);
        posizionaOstacoli("mina",12,34);}
    break;
    case 26:
        {posizionaOstacoli("mina",1,32);
        posizionaOstacoli("mina",2,25);
        posizionaOstacoli("mina",3,6);
        posizionaOstacoli("mina",4,29);
        posizionaOstacoli("mina",5,19);
        posizionaOstacoli("mina",6,11);
        posizionaOstacoli("mina",7,35);
        posizionaOstacoli("mina",8,36);
        posizionaOstacoli("mina",9,14);
        posizionaOstacoli("mina",10,24);
        posizionaOstacoli("mina",11,5);
        posizionaOstacoli("mina",12,22);
        posizionaOstacoli("mina",13,20);
        posizionaOstacoli("mina",14,11);
        posizionaOstacoli("mina",15,9);
        posizionaOstacoli("mina",16,25);
        posizionaOstacoli("mina",17,9);
        posizionaOstacoli("mina",18,1);
        posizionaOstacoli("mina",19,28);
        posizionaOstacoli("mina",20,11);
        posizionaOstacoli("mina",21,13);
        posizionaOstacoli("mina",22,23);
        posizionaOstacoli("mina",23,16);
        posizionaOstacoli("mina",24,36);
        posizionaOstacoli("mina",25,18);
        posizionaOstacoli("mina",26,17);
        posizionaOstacoli("mina",26,38);
        posizionaOstacoli("mina",5,18);
        posizionaOstacoli("mina",6,17);}
    break;
    case 27:
        {posizionaOstacoli("mina",1,5);
        posizionaOstacoli("mina",2,25);
        posizionaOstacoli("mina",3,6);
        posizionaOstacoli("mina",4,29);
        posizionaOstacoli("mina",5,19);
        posizionaOstacoli("mina",6,11);
        posizionaOstacoli("mina",7,35);
        posizionaOstacoli("mina",8,36);
        posizionaOstacoli("mina",9,14);
        posizionaOstacoli("mina",10,24);
        posizionaOstacoli("mina",11,5);
        posizionaOstacoli("mina",12,22);
        posizionaOstacoli("mina",13,20);
        posizionaOstacoli("mina",14,11);
        posizionaOstacoli("mina",15,9);
        posizionaOstacoli("mina",16,25);
        posizionaOstacoli("mina",17,9);
        posizionaOstacoli("mina",18,30);
        posizionaOstacoli("mina",19,8);
        posizionaOstacoli("mina",20,17);
        posizionaOstacoli("mina",21,16);
        posizionaOstacoli("mina",22,36);
        posizionaOstacoli("mina",23,23);
        posizionaOstacoli("mina",24,36);
        posizionaOstacoli("mina",25,18);
        posizionaOstacoli("mina",27,36);
        posizionaOstacoli("mina",26,38);}
    break;
    case 28:
        {for(int i=9; i<32;i++)
            if(i!=10)
                posizionaOstacoli("mina",25,i);

        posizionaOstacoli("mina",26,9);
        posizionaOstacoli("mina",27,9);
        posizionaOstacoli("mina",26,31);
        posizionaOstacoli("mina",27,31);
        posizionaOstacoli("mina",27,11);
        posizionaOstacoli("mina",26,13);
        posizionaOstacoli("mina",27,16);
        posizionaOstacoli("mina",26,18);
        posizionaOstacoli("mina",27,20);
        posizionaOstacoli("mina",26,23);
        posizionaOstacoli("mina",27,25);
        posizionaOstacoli("mina",26,29);}
    break;
    case 29:
        {for(int i=1; i<39;i++)
            if(i!=30)
                posizionaOstacoli("mina",8,i);}
    break;
    case 34:
        {posizionaOstacoli("mina",11,3);
        posizionaOstacoli("mina",13,9);
        posizionaOstacoli("mina",13,15);
        posizionaOstacoli("mina",11,21);
        posizionaOstacoli("mina",13,27);
        posizionaOstacoli("mina",11,33);}
    break;
    case 40:
        {for(int i=1; i<39;i++)
                posizionaOstacoli("mina",1,i);

            for(int i=1; i<39;i++)
                if((i!=1)&&(i!=2)&&(i!=2)&&(i!=3)&&(i!=4)&&(i!=5))
                    posizionaOstacoli("mina",27,i);

            for(int i=1; i<28;i++)
                if((i!=23)&&(i!=24)&&(i!=25)&&(i!=26)&&(i!=27))
                    posizionaOstacoli("mina",i,1);

            for(int i=1; i<28;i++)
                posizionaOstacoli("mina",i,38);

            int colonne[413]={  14,21,34, //2
                                3,4,5,6,7,8,9,10,11,13,14,16,17,18,19,21,23,24,25,27,28,29,30,31,32,33,34,36,37,
                                4,11,14,16,19,25,28,34,36, //4
                                3,4,6,7,8,9,11,13,14,16,17,19,20,21,22,23,25,26,28,30,32,34,36,
                                3,6,9,11,13,16,23,25,28,30,32,34,36, //6
                                3,5,6,8,9,11,13,15,16,18,19,20,21,23,25,27,28,30,32,34,36,
                                3,5,8,11,13,15,18,21,23,25,27,30,32,36, //8
                                3,5,7,8,10,11,13,15,17,18,20,21,23,25,27,29,30,32,33,34,35,36,
                                3,5,8,10,13,15,17,18,23,25,27,29,32,36, //10
                                3,5,6,8,10,12,13,15,18,19,20,21,22,23,25,27,29,31,32,34,36, //12
                                3,8,10,13,15,16,19,25,27,29,31,34,36,
                                3,5,6,8,10,13,16,17,19,21,22,23,24,25,27,29,33,34,36,//14
                                3,5,8,10,12,13,14,17,19,21,23,27,29,30,31,32,33,34,36,
                                3,5,6,8,10,14,15,17,19,21,23,25,26,27,32,36,//16
                                3,6,8,10,11,12,15,17,19,21,23,27,28,29,30,32,34,36,
                                3,6,8,12,13,15,17,19,23,25,28,30,32,33,34,35,36,//18
                                3,5,6,8,9,10,13,15,17,19,21,23,25,28,30,32,
                                3,5,10,11,13,15,17,19,21,23,24,25,26,28,30,32,34,35,36,37,//20
                                3,5,6,7,8,11,13,15,17,19,21,26,28,30,
                                8,9,11,13,15,17,19,21,22,23,24,26,28,30,31,32,33,34,35,36,//22
                                2,4,5,6,11,13,15,17,19,24,26,36,
                                6,8,10,11,13,15,17,19,20,21,22,24,26,27,29,30,31,32,33,34,35,36,//24
                                6,8,11,13,15,17,22,24,29,
                                6,8,9,10,11,13,14,15,17,18,19,20,22,24,25,26,27,28,29,31,33,34,35,36,37,
                                6,11,22,31};
            int righe[413]={2,2,2,
                            3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,
                            4,4,4,4,4,4,4,4,4,
                            5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,
                            6,6,6,6,6,6,6,6,6,6,6,6,6,
                            7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
                            8,8,8,8,8,8,8,8,8,8,8,8,8,8,
                            9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,
                            10,10,10,10,10,10,10,10,10,10,10,10,10,10,
                            11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,
                            12,12,12,12,12,12,12,12,12,12,12,12,12,
                            13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,
                            14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,
                            15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,
                            16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,
                            17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,
                            18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,
                            19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,
                            20,20,20,20,20,20,20,20,20,20,20,20,20,20,
                            21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,
                            22,22,22,22,22,22,22,22,22,22,22,22,
                            23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,
                            24,24,24,24,24,24,24,24,24,
                            25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,25,
                            26,26,26,26};

            for(int i=0; i<413;i++)
                posizionaOstacoli("mina",righe[i],colonne[i]);}
    }
}

void stampacolori()
{
    for(int i=0; i<16;i++)
    {
        SetColor(i);
        cout<<i<<":";
        for(int j=0; j<40; j++)
            cout<<(char) 219;
        cout<<endl;
    }
    getch();
}

void ScreenSize(int x, int y)
{
    COORD coord;
    coord.X = x;
    coord.Y = y;

    _SMALL_RECT Rect;
    Rect.Top = 0;
    Rect.Left = 0;
    Rect.Bottom = x - 1;
    Rect.Right = y - 1;

    // Adjust buffer size:
    HANDLE handle = GetStdHandle(STD_OUTPUT_HANDLE);
    if (!SetConsoleScreenBufferSize(handle, coord))
        throw std::runtime_error("Unable to resize screen buffer.");

    // display as a maximized window
    ShowWindow(GetConsoleWindow(), SW_MAXIMIZE);
}

void ClearScreen()
{
    HANDLE                     hStdOut;
  CONSOLE_SCREEN_BUFFER_INFO csbi;
  DWORD                      count;
  DWORD                      cellCount;
  COORD                      homeCoords = { 0, 0 };

  hStdOut = GetStdHandle( STD_OUTPUT_HANDLE );
  if (hStdOut == INVALID_HANDLE_VALUE) return;

  /* Get the number of cells in the current buffer */
  if (!GetConsoleScreenBufferInfo( hStdOut, &csbi )) return;
  cellCount = csbi.dwSize.X *csbi.dwSize.Y;

  /* Fill the entire buffer with spaces */
  if (!FillConsoleOutputCharacter(
    hStdOut,
    (TCHAR) ' ',
    cellCount,
    homeCoords,
    &count
    )) return;

  /* Fill the entire buffer with the current colors and attributes */
  if (!FillConsoleOutputAttribute(
    hStdOut,
    csbi.wAttributes,
    cellCount,
    homeCoords,
    &count
    )) return;

  /* Move the cursor home */
  SetConsoleCursorPosition( hStdOut, homeCoords );
}

int StringToNumber ( const string &Text )//Text not by const reference so that the function can be used with a
{                               //character array as argument
	stringstream ss(Text);
	int result;
	return ss >> result ? result : 0;
}

void scrivisufileditesto()
{
    scrivi.open("savedata.txt");

        for(int i=0; i<40; i++)
            scrivi << rand();
    if(lv>=10)
        {
            scrivi<<lv;
            scrivi<<'x';
        }
    else
        scrivi<<lv;

    scrivi.close();
}

void leggilivello()
{
    if(std::ifstream("savedata.txt"))
    {
    leggi.open("savedata.txt", ios::in);

    string con;

    leggi>>con;

    int i=0;
    while(i<con.length())
        i++;

    char protolv;
    protolv=con.at(i-1);

    if(protolv=='x')
    {
        char protolvunita=con.at(i-2);
        char protolvdecina=con.at(i-3);

        lv=((protolvdecina-'0')*10)+(protolvunita-'0');
    }
    else
        lv=protolv-'0';

    leggi.close();
    }
}
