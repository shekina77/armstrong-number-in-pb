//armstrong number
n=+prompt("enter number:")
temp=n
c=0,sum=0
while(n!=0){
    rem=n%10
    n=(n/10)-(rem/10)
    c++
}
n=temp
while(temp!=0){
    rem=temp%10
    sum+=rem**c
    temp=(temp/10)-(rem/10)
}
console.log(sum==n)


