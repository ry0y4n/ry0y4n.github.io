(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{352:function(s,n,t){"use strict";t.r(n);var e=t(3),a=Object(e.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"動機"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#動機"}},[s._v("#")]),s._v(" 動機")]),s._v(" "),t("p",[s._v("卒研でとある解析プログラムを開発した．（CとPython）\n後任のためにGUIで解析できるElectronデスクトップアプリを開発しようと決意．")]),s._v(" "),t("p",[s._v("ElectronどころかNodeアプリは初だった．Viewはまぁ良いとして解析のロジックをどう繋げようか悩んだ．\n不得意なphpやjsに書き換えるのもアレなので，どうにかjs上でC,Pythonプログラムが実行できないかと思案したのが動機．")]),s._v(" "),t("h2",{attrs:{id:"救える人"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#救える人"}},[s._v("#")]),s._v(" 救える人")]),s._v(" "),t("ul",[t("li",[s._v("Nodeアプリ開発でjs上で他言語のプログラムを実行したい人")])]),s._v(" "),t("p",[s._v("本編のネタバレすると，js上にサブプロセスを走らせる．ということをする．\n要はコマンドプロンプトやらターミナルだ．なので，ターミナルで出来る作業はなんだって出来る．")]),s._v(" "),t("p",[s._v("これを言うと僕みたいな未熟者以外の方の耳もピクリと動くのではなかろうか．")]),s._v(" "),t("h2",{attrs:{id:"本編"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本編"}},[s._v("#")]),s._v(" 本編")]),s._v(" "),t("p",[t("code",[s._v("chile_process")]),s._v("というNodeモジュールを使うと幸せになれる．\nこのモジュールはjs上でサブプロセスを生成できるという代物．")]),s._v(" "),t("p",[s._v("僕が作ったelectronアプリが例を抜粋するとこんな感じ．")]),s._v(" "),t("div",{staticClass:"language-index.html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>subroutine</title>\n    <script>\n        function subroutine() {\n\t\t    let remote = require("electron").remote; // 以下3行はelectronアプリのpathを入手する例\n            let app = remote.app;\n            let path = app.getAppPath();\n\n            const exec = require("child_process").exec;\n\n            exec(path + "/violin_plot.bat"); // exec()の中にサブプロセスで実行したいコマンドをいれる．\n    \n\t    }\n    <\/script>\n</head>\n<body>\n    <button onclick="subroutine();">サブルーチン</button>\n</body>\n</html>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("p",[s._v("実際にはターミナルは表示されないので，標準出力とかは確認できないが，解析からのファイル操作とかCやpythonが得意なことで使うと効力を発揮するだろう．")])])}),[],!1,null,null,null);n.default=a.exports}}]);