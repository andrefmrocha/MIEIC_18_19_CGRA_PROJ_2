/* eslint-disable no-sequences */
/* eslint-disable keyword-spacing */
/* eslint-disable no-array-constructor */
/* eslint-disable space-infix-ops */
/* eslint-disable no-var */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
// From https://github.com/EvanHahn/ScriptInclude
include = function () { function f () { let a = this.readyState; (!a || /ded|te/.test(a)) && (c--, !c && e && d()); } var a = arguments; var b=document; var c=a.length; var d=a[c-1]; var  e = d.call; e && c--; for (var g, h = 0; c > h; h++)g = b.createElement('script'), g.src = arguments[h], g.async = !0, g.onload = g.onerror = g.onreadystatechange = f, (b.head || b.getElementsByTagName('head')[0]).appendChild(g); };
serialInclude = function (a) { let b = console; var  c = serialInclude.l; if (a.length > 0)c.splice(0, 0, a); else b.log('Done!'); if (c.length > 0) { if (c[0].length > 1) { let d = c[0].splice(0, 1); b.log('Loading ' + d + '...'); include(d, function () { serialInclude([]); }); }else { let e = c[0][0]; c.splice(0, 1); e.call(); }; } else b.log('Finished.'); }; serialInclude.l = new Array();

serialInclude(['../lib/CGF.js',
    'MyScene.js',
    'MyInterface.js',
    'Plane.js',
    'MyBird.js',
    'MySphere.js',
    'MyHouse.js',
    'MyCylinder.js',
    'MyUnitCubeQuad.js',
    'MyQuad.js',
    'MyPyramid.js',
    'MyBirdWing.js',
    'MyTriangle.js',
    'MyLSystem.js',
    'MyTree.js',
    'MyBranch.js',
    'MyLeaf.js',
    'MyParallelogram.js',
    'MyForest.js',
    'MyLightning.js',
    'MyRectangle.js',
    'MyBirdFeet.js',
    'MyCone.js',

    main = function ()     {
        let app = new CGFapplication(document.body);
        let myScene = new MyScene();
        let myInterface = new MyInterface();

        app.init();

        app.setScene(myScene);
        app.setInterface(myInterface);

        myInterface.setActiveCamera(myScene.camera);

        app.run();
    }

]);
