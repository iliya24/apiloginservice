var firebaseConfig = {
    apiKey: "AIzaSyB-r5UzCr4HHaSkai3gPDf8yDWLDqETwrA",
    authDomain: "userstest-eb844.firebaseapp.com",
    databaseURL: "https://userstest-eb844.firebaseio.com",
    projectId: "userstest-eb844",
    storageBucket: "userstest-eb844.appspot.com",
    messagingSenderId: "135977711273",
    appId: "1:135977711273:web:0d312c7b4c54fda4ea5bb8"
  };

 var firebase = require('firebase');
 var app = firebase.initializeApp(firebaseConfig);
 
 let auth=firebase.auth();



module.exports={

signUp: async (req,res,next)=>
    {
        console.log('users signUp controller method');
        console.log(req.body);
       
        auth.createUserWithEmailAndPassword(req.body.email,req.body.password).then(
            result=>{
                console.log('user:'+result.user);
            res.send(result.user);

            }
        ); 
        
},

signIn: async (req,res,next)=>
    {
    console.log('users signIn controller method');
    console.log(req.body);

auth.signInWithEmailAndPassword(req.body.email,req.body.password).then(
    result=>{
      result.user.getIdToken(true).then(tk=>
        {
            console.log(tk);

            res.send(tk);

        }

     );

    }
);

},
secret: async (req,res,next)=>
    {
console.log('users secret controller method');
res.send('secret');

}

}