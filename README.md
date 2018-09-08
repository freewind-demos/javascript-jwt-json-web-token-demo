JavaScript JWT "JSON Web Token" Demo
====================================

JWT是一个基于cookie/session/header验证的标准化和改进，当然基于它还有很多别的作用。

简单的说就跟session id那样：用户在登录成功后还要继续做很多操作，那么服务器是怎么知道用户已经登录的呢？
之前的普遍做法就是服务器产生一个唯一的session id，传给用户浏览器，用户每次访问页面或者进行什么操作时，都会把这个session id发给服务器。
服务器检查这个session id，再在自己这边查一下与之相关联的其它信息，就知道这个用户是谁，有没有登录。

那么JWT跟它本质上差不多，只不过进行了标准化，考虑的事情也更周到。
比如允许在token中增加更多的信息（比如要进行某一个操作，以及涉及到的必要数据），还可以对它进行签名，把有效期什么的也可以加在上面，
这样只要拿到这个token都可以看到这些信息，但是只有知道密钥的服务器才能去验证信息的真假。
如果信息为真，那么就可以根据里面的数据直接进行操作。

```
npm install
npm run demo
```

将会打印出生成的JWT:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZW1vIiwibmFtZSI6ImphdmFzY3JpcHQtand0LWpzb24td2ViLXRva2VuLWRlbW8iLCJpYXQiOjE5OTk5MzkwMjJ9.Sx-vvQn2N_kpdTE2E_v1WvSOAtR_YCVlg-rcv0AgRoY
```

Resources
---------

- JWT: http://jwt.io
- JSON Web Token - 在Web应用间安全地传递信息: http://blog.leapoahead.com/2015/09/06/understanding-jwt/