/**
 * Created by JetBrains WebStorm.
 * User: michael
 * Date: 12-4-1
 * Time: 上午11:14
 * To change this template use File | Settings | File Templates.
 */
define(function(require, exports, module){
    (function (){
        var loginPanel = document.createElement('div'),
            loginForm = document.createElement('form'),
            loginName = document.createElement('input'),
            loginPass = document.createElement('input'),
            loginBtn = document.createElement('input');

        loginForm.setAttribute('action', '/login');
        loginForm.setAttribute('method', 'post');
        loginPass.setAttribute('type', 'password');
        loginBtn.setAttribute('type', 'submit');
        loginBtn.setAttribute('value', 'login');

        loginForm.appendChild(loginName);
        loginForm.appendChild(loginPass);
        loginForm.appendChild(loginBtn);
        loginPanel.appendChild(loginForm);
        document.body.appendChild(loginPanel);
    })();
});