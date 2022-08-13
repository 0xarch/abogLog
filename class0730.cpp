#include<iostream>
#include<cstdlib>
int i,j,looped;
const int SIZE{3};
char a[SIZE][SIZE];
using namespace std;

int precept(char a[SIZE][SIZE]){
	int lines,columns,pixels,counts;
	for(lines=0;lines<SIZE;lines++){
		counts=0;
		for(columns=1;columns<SIZE;columns++)if(a[lines][columns]==a[lines][columns-1] && a[lines][columns]!='A')counts++;
		if(counts==SIZE-1)return 114514;
	}
	for(columns=0;columns<SIZE;columns++){
		counts=0;
		for(lines=1;lines<SIZE;lines++)if(a[lines][columns]==a[lines-1][columns] && a[lines][columns]!='A')counts++;
		if(counts==SIZE-1)return 114514;
	}
	counts=0;
	for(pixels=1;pixels<SIZE;pixels++){
		if(a[pixels][pixels]==a[pixels-1][pixels-1] && a[pixels][pixels]!='A')counts++;
		if(counts==SIZE-1)return 114514;
	}
	counts=0;
	for(pixels=SIZE-1;-1<pixels && pixels<SIZE;pixels--){
		if(a[SIZE-pixels-1][pixels]==a[SIZE-pixels][pixels-1] && a[SIZE-pixels-1][pixels]!='A')counts++;
		if(counts==SIZE-1)return 114514;
	}
	return 1919810;
}
void printer(char a[SIZE][SIZE]){
	for(i=0;i<SIZE;i++){
		for(j=0;j<SIZE;j++)cout<<a[i][j]<<"  ";
		cout<<endl;
	if(precept(a)==114514){
		cout<<"One has won"<<endl;
		exit(0);
}}}
void input(char a[SIZE][SIZE]){
	int line,column;
	cout<<"X turns"<<endl;
	cin>>line>>column;
	if(a[line-1][column-1]=='A')a[line-1][column-1]='X';
	printer(a);
	cout<<"O turns"<<endl;
	cin>>line>>column;
	if(a[line-1][column-1]=='A')a[line-1][column-1]='O';
	printer(a);
}
int main(){
	for(i=0;i<SIZE;i++)for(j=0;j<SIZE;j++)a[i][j]='A';
	printer(a);
	for(looped=0;looped<SIZE*SIZE;looped++)input(a);
}
