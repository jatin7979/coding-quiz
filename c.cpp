 c++ class representing a geometric shape such as a rectangle or a circle implement nesting member function to calculate the area and perimeter of the shape allow user to set the dimension of the shape and retrive its area and perimeter and use the constructor in it 
#include <iostream>
using namespace std;
class geometric shapes{

public:
string shape="circle";
string shape2="rectangle";
float length,width,radius,area,perimeter;
void read();
void display();
};
void  geometricshapes::read(){
    cout<<"enter geometric shape(rectangle or circle)"<<endl;
    cin>>shape;
    if(shape=="circle"){
        cout<<"your shape is circle,enter dimensions:"<<endl;
        cin>>radius;
        cout<<endl;
        cout<<"area of circle"<<3.14*radius*radius<<endl;
        cout<<"perimeter of circle"<<2*3.14*radius<<endl;
    }
    else{
        cout<<"your chosssen shape is rectangle,enter your dimention:";
        cout<<"area of rectangle="<<length*width*<<endl;
    }
}
 void geometricshapes::display(){
    read();
 }
int main(){
    geometricshapes calculate;
    calculate.display();
    return 0;
    
}