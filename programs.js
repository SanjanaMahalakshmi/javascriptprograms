           //PROGRAM 1
// for(let i=1;i<=100;i++)
// {
//     if(i%3==0 && i%5==0)
//         document.write("FizzBuzz"+" ");
//     else if(i%3==0)
//         document.write("Fizz"+" ")
//     else if(i%5==0)
//     document.write("Buzz"+" ");
//     else
//        document.write(i+" ")
// }



               // PROGRAM 2
// let str1="";
// function palindrome(str)
// {
//     for(let i=str.length;i>=0;i--)
//     {
//          str1+=str.charAt(i);
//     }
//     if(str1==str)
//     {
//         document.write("Given String is palindrome")
//     }
//     else{
//         document.write("Not a palindrome")
//     }

// }
// palindrome("malayalam")





                      //PROGRAM 3
// let max=0;
// function largest(arr)
// {
//   for(let i=0;i<arr.length;i++)
//   {
//     if(arr[i]>max)
//     { 
//         max=arr[i];
//     }
//   }
//     return max;
  
// }
// document.write(largest([100,500,300,400]))




                        //PROGRAM 4

// function counting(str)
//  {
//     let count={};
//     for(let i=0;i<str.length;i++)
//     {
//      let char=str[i];
//      if(count[char]){
//         count[char]++;
//     }else{
//         count[char]=1;
//     }
//     }
//     return count;
//  }
//  console.log(counting("Hey How are you"))
                        

                        //PROGRAM 5

// function sentence(str)
// {
//   let longword="";
//   let words=str.split(" ");
//   for(let i=0;i<words.length;i++)
//   {
//     if(words[i].length >longword.length)
//     {
//         longword=words[i]    
//     }
//   }
//   return longword
// }

// document.write(sentence("She likes to play basketball "))



                        //PROGRAM 6
// let fact=1;

// function factorial(num)
// {
    
//     for(let i=1;i<=num;i++)
//     {
//         fact=fact*i;
//     }
//     return fact;
// }
// document.write(factorial(5))



                    //PROGRAM 7
// function temperature(temp)
// {
//     let tempinfarenheit=(9/5)*temp+32;
//     return tempinfarenheit;
// }
 
//  let temperatureinfarenheit=(temperature(4.3))
// document.write("Temperature converted to farenheit value is "+temperatureinfarenheit)
 


                     //PROGRAM 8
function missingnum(num,arr)
{
    for(let i=0;1<arr.length;i++)
    {
        if(arr[i]==num)
        {
            document.write(num)
        }
        else{
            document.write("No missing value")
        }
    }
}
document.write("None")