Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items:{ html:'My first App!'},
    launch: function() {
        console.log('Our first app has arrived!');
    }
});
