/**
 * Created by JetBrains WebStorm.
 * User: michael
 * Date: 12-4-1
 * Time: 上午11:14
 * To change this template use File | Settings | File Templates.
 */
define(function(require, exports, module){
    (function (){
        if(!document)
            throw new Error('this must be run in browser.');
        var doc = document;
        var loginPanel = doc.createElement('div'),
            loginForm = doc.createElement('form'),
            loginName = doc.createElement('input'),
            loginPass = doc.createElement('input'),
            loginBtn = doc.createElement('input');

        loginForm.setAttribute('action', '/login');
        loginForm.setAttribute('method', 'post');
        loginName.setAttribute('name', 'username');
        loginPass.setAttribute('type', 'password');
        loginPass.setAttribute('name', 'password');
        loginBtn.setAttribute('type', 'submit');
        loginBtn.setAttribute('value', 'login');

        loginForm.appendChild(loginName);
        loginForm.appendChild(loginPass);
        loginForm.appendChild(loginBtn);
        loginPanel.appendChild(loginForm);
        doc.body.appendChild(loginPanel);
    })();
});