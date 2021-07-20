#include<iostream.h>
#include<stdlib.h>
#include<string.h>
#include<conio.h>
#include<fstream.h>
#include<time.h>
class contest
{
private:
    int roll;
    float x;
    char name[20];
    char s[100],ans;

public:
    contest()
    { x=0; }
    void init();
    void define();
    void display();
};
void  contest :: define()
{
   ifstream in;
   char a;
   clock_t start=clock();
      int i=0,t=30;
   in.open("ques.txt");
    while(in.eof()==0)
    {
    in.getline(s,100);
    cout<<endl<<s;
   if(i==4)
   {
   in.get(a);
   i=-2;
   cout<<"\ntimer: "<<t<<" sec"<<endl;
   cout<<"ans:";
   while(((clock()-start)/CLOCKS_PER_SEC)<=t)
    {
    if(((clock()-start)/CLOCKS_PER_SEC)==t/2)
    {
    cout<<t/2<<" sec left"<<endl;
    }
      if(kbhit())
       {
	cin>>ans;
	if(ans==a)
	 {
	   x=x+5;
	  cout<<" *Your ans  correct.\n";
	  break;
	  }
	 else
	  {
	    if(x>0)
	    x=x;
	    cout<<" # Wrong ans.\n";
	    break;
	   }
      }
      }
    if(((clock()-start)/CLOCKS_PER_SEC)>t)
     {
      cout<<"\nTimeout"<<endl;
      start=clock();
      goto o;
      }
      o:
    }
   i++;
    }
   in.close();
}
     void contest :: init()
       {
     cout<<"\t\t\t   Examinee Name:";
     cin>>name;
     cout<<"\t\t\t   Examinee roll:";
     cin>>roll;
       }
     void contest :: display()
       {
     cout<<"\n **Result:\n";
     cout<<"\t"<<name<<" you got total "<<x<<" marks,out of 50.\n";
       }

void main()
{
    clrscr();
    contest r;
    cout<<"      \t\t\t~~~*** QUIZ CONTEST ***~~~\t      Total Marks:50\n\n";
    r.init();
    cout<<"\t*5 marks per Ques(half negative marking for wrong ans)";
       L:
    cout<<"\n\n\tselect your choice:\n"
        <<"\n\t1 for start exam"
        <<"\n\t0 for quit the exam :";
       int c;
       cin>>c;
       switch(c)
       {
       case 1:
        r.define();
        r.display();
        break;
       case 0:
        exit(1);
       default:
        cout<<"invalid choice!";
        goto L;
       }
       getch();
}