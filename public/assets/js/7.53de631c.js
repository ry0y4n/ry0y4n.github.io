(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{332:function(s,t,a){s.exports=a.p+"assets/img/line.f2794809.png"},333:function(s,t,a){s.exports=a.p+"assets/img/lineNotify.9c7231e3.png"},334:function(s,t,a){s.exports=a.p+"assets/img/gmail.ee2a3b8c.png"},335:function(s,t,a){s.exports=a.p+"assets/img/gmailSetting.c48a4d40.png"},336:function(s,t,a){s.exports=a.p+"assets/img/gas.d256d029.png"},337:function(s,t,a){s.exports=a.p+"assets/img/gas2.1e4bf833.png"},338:function(s,t,a){s.exports=a.p+"assets/img/gas3.933adc3b.png"},339:function(s,t,a){s.exports=a.p+"assets/img/gas4.037d8047.png"},340:function(s,t,a){s.exports=a.p+"assets/img/gas5.b145ac18.png"},360:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[n("img",{attrs:{src:a(332),alt:"line.png"}})]),s._v(" "),n("h2",{attrs:{id:"アブスト（飛ばしていい）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#アブスト（飛ばしていい）"}},[s._v("#")]),s._v(" アブスト（飛ばしていい）")]),s._v(" "),n("p",[s._v("今年から筑波大学に入学していきなりコロナでリモート授業になった．")]),s._v(" "),n("p",[s._v("manabaで授業関連の情報が流れてくるが，僕が使ってるiphoneという電子端末は数時間おきにまとめてメールの通知を寄こしてきやがる．ので僕は困った．リアルタイムでメール通知が欲しいと思って開発してみた．かなり完成されたコードがネットに上がってたので深夜に30分で実装できてしまった（自慢）．")]),s._v(" "),n("blockquote",{staticClass:"twitter-tweet"},[n("p",{attrs:{lang:"ja",dir:"ltr"}},[s._v("なんかメール開くんだるいんでLINEに転送させてみようかなぁ")]),s._v("— モモスケ (@AnoTensai) "),n("a",{attrs:{href:"https://twitter.com/AnoTensai/status/1256631132348506113?ref_src=twsrc%5Etfw"}},[s._v("May 2, 2020")])]),s._v(" "),n("script",{attrs:{async:"",src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}}),s._v(" "),n("blockquote",{staticClass:"twitter-tweet"},[n("p",{attrs:{lang:"ja",dir:"ltr"}},[s._v("はいはい．なんとなく実装分かったぞ．")]),s._v("— モモスケ (@AnoTensai) "),n("a",{attrs:{href:"https://twitter.com/AnoTensai/status/1256632174243008518?ref_src=twsrc%5Etfw"}},[s._v("May 2, 2020")])]),s._v(" "),n("script",{attrs:{async:"",src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}}),s._v(" "),n("blockquote",{staticClass:"twitter-tweet"},[n("p",{attrs:{lang:"ja",dir:"ltr"}},[s._v("は？もう完成したんやが！")]),s._v("— モモスケ (@AnoTensai) "),n("a",{attrs:{href:"https://twitter.com/AnoTensai/status/1256639386357137408?ref_src=twsrc%5Etfw"}},[s._v("May 2, 2020")])]),s._v(" "),n("script",{attrs:{async:"",src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}}),s._v(" "),n("h2",{attrs:{id:"情報系の人へ（飛ばしていい）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#情報系の人へ（飛ばしていい）"}},[s._v("#")]),s._v(" 情報系の人へ（飛ばしていい）")]),s._v(" "),n("p",[s._v("Qiitaに，この記事ほど噛み砕いていないものをアップしたので"),n("strong",[s._v("こんな長々とした文章には辟易するぜ")]),s._v("って人は↓の記事どうぞ．")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://qiita.com/drafts/3497f65baa18c0307c7e/edit",target:"_blank",rel:"noopener noreferrer"}},[s._v("大学（会社）から来るメールがLINEに来れば良いと思うんだけど君はどう思う？"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("あと，一部の過激派から「"),n("strong",[s._v("おいおい，LINEなんてパンピーが使うアプリに通知ながすのかい？ボーゥイ？せめてSlackかWeChatだろぉ？")]),s._v("」なんてヤジが飛んできても無視します．")]),s._v(" "),n("h2",{attrs:{id:"やることリスト（飛ばしていい）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#やることリスト（飛ばしていい）"}},[s._v("#")]),s._v(" やることリスト（飛ばしていい）")]),s._v(" "),n("ol",{attrs:{start:"0"}},[n("li",[s._v("通知を流すグループを作り，LINEトークンを発行")]),s._v(" "),n("li",[s._v("大学からのメール(office)をGmailにインポートしてラベリング")]),s._v(" "),n("li",[s._v("GASでメールを検知してLINEへ発出")])]),s._v(" "),n("h2",{attrs:{id:"_0-lineトークンを発行して，通知を流すグループを作る．"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_0-lineトークンを発行して，通知を流すグループを作る．"}},[s._v("#")]),s._v(" 0. LINEトークンを発行して，通知を流すグループを作る．")]),s._v(" "),n("p",[s._v("まずはLINE上で通知を流すためのグループを作ってそこにLINE Notifyを招待してください．")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",[s._v("グループじゃなくて1:1で通知するオプションも選べます．その場合LINE Notifyとのトークとして通知が来ます．\nどっちがいいかはヴィジュアルの好みによるし，この後の作業にまったく影響しないので任せます．")])]),s._v(" "),n("p",[s._v("次に"),n("a",{attrs:{href:"https://notify-bot.line.me/ja/",target:"_blank",rel:"noopener noreferrer"}},[s._v("LINE Notify"),n("OutboundLink")],1),s._v("にアクセスしてお使いのLINE IDでログインしてください．"),n("br"),s._v("\nログインしたらマイページにて「トークンを発行する」から作成したグループを選択の上トークンを発行してください．その際に表示されるトークンをあとで使います．")]),s._v(" "),n("p",[n("img",{attrs:{src:a(333),alt:"lineNotify.png"}})]),s._v(" "),n("h2",{attrs:{id:"_1-大学からのメール-office-をgmailにインポートしてラベリングする"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-大学からのメール-office-をgmailにインポートしてラベリングする"}},[s._v("#")]),s._v(" 1. 大学からのメール(office)をGmailにインポートしてラベリングする")]),s._v(" "),n("p",[s._v("お使いのGmailを開いてください．デスクトップでもWebでも構いません．"),n("br"),s._v("\nそしたら右上の歯車マークから"),n("strong",[s._v("設定")]),s._v("を開いてください．")]),s._v(" "),n("p",[n("img",{attrs:{src:a(334),alt:"gmail.png"}})]),s._v(" "),n("p",[s._v("「アカウントとインポート」欄の「他のアカウントでメールを確認」から「メールアカウントを追加する」を選択してください．")]),s._v(" "),n("p",[n("img",{attrs:{src:a(335),alt:"gmailSetting.png"}})]),s._v(" "),n("p",[s._v("そうするとアカウントを追加するウィンドウが表示されます．")]),s._v(" "),n("p",[s._v("1ページ目：大学メールアドレスを入力"),n("br"),s._v("\n2ページ目：「他のアカウントからメールを読み込む（POP3）」を選択"),n("br"),s._v("\n3ページ目：パスワードを入力．チェック欄は最後以外にチェックを付ける．ラベル名をつける（重要）"),n("br"),s._v("\nその後のページはデフォルト設定or推奨オプションを選択で上手くいくと思います")]),s._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",[s._v("あとでスクショ用に改めてメアド追加しようと思ったらウィンドウの形式が違いました．なので以前にもアカウントを追加したことがあるかどうかなど，個人の環境のよって出てくるウィンドウが違うかもしれません．しかし重要なのは「"),n("strong",[s._v("ラベル名を付けること")]),s._v("」なのでそれ以外はデフォルトでまず問題ないと考えられます．")])]),s._v(" "),n("p",[s._v("これでGmailを開くと指定したラベル名でメールアカウントが追加されてると思います．")]),s._v(" "),n("div",{staticClass:"custom-block danger"},[n("p",[s._v("注意！！！Gmailへのインポートが完了したら現時点で来てるメールをすべて"),n("strong",[s._v("既読")]),s._v("にしてください．今回のプログラムは未読メールを検知してLINEに通知して既読にするまでを行います．")])]),s._v(" "),n("h2",{attrs:{id:"_2-gasでメールを検知してlineへ発出"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-gasでメールを検知してlineへ発出"}},[s._v("#")]),s._v(" 2. GASでメールを検知してLINEへ発出")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://script.google.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("GoogleAppScript"),n("OutboundLink")],1),s._v("にGmailと同じアカウントでログインしてください．")]),s._v(" "),n("p",[n("img",{attrs:{src:a(336),alt:"gas.png"}})]),s._v(" "),n("p",[s._v("左上のボタンから新しいプロジェクトを開いてください．")]),s._v(" "),n("p",[s._v("開いたら，元からあるコードを消して，以下のコードを貼り付けてください．")]),s._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",[s._v("1行目はさきほど発行したトークに置換してください．"),n("br"),s._v("\n23行目の「指定したラベル名を代入」のところはあなたが指定したラベル名に置換してださい．")])]),s._v(" "),n("div",{staticClass:"language-コード.gs line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('var lineToken = "********************"; //LINE notify token\nvar get_interval = 1; //1分前からの新着メールを取得\n\n\nfunction send_line(Me){\n var payload = {\'message\' :   Me};\n var options ={\n   "method"  : "post",\n   "payload" : payload,\n   "headers" : {"Authorization" : "Bearer "+ lineToken}  \n };\n UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);\n}\n\n\nfunction fetchContactMail() {\n\n //取得間隔\n var now_time= Math.floor(new Date().getTime() / 1000) ;//現在時刻を変換\n var time_term = now_time - (60 * get_interval + 3); //秒（バッファとして3秒追加）\n\n //検索条件指定(指定ラベル先の未読メールを検索)\n  var strTerms =  (\'is:unread label:"指定したラベル名を代入"\');\n\n //取得\n var myThreads = GmailApp.search(strTerms);\n var myMsgs = GmailApp.getMessagesForThreads(myThreads);\n var valMsgs = [];\n for(var i = 0; i < myMsgs.length;i++){\n   valMsgs[i] = " " + (myMsgs[i].slice(-1)[0].getDate().getMonth()+1) + "/" + myMsgs[i].slice(-1)[0].getDate().getDate()\n    + " " + myMsgs[i].slice(-1)[0].getDate().getHours() + ":" + myMsgs[i].slice(-1)[0].getDate().getMinutes() // 日付\n    + "\\n[From]" + myMsgs[i].slice(-1)[0].getFrom() // 送信先\n    + "\\n\\n[Subject]" + myMsgs[i].slice(-1)[0].getSubject() // 件名\n    + "\\n\\n\\n[Message]"+ myMsgs[i].slice(-1)[0].getPlainBody(); // 本文（全文表示したくないなら.slice(0, 30)とかしてください）\n    myMsgs[i][0].markRead(); //メッセージを既読にする\n }\n\n\n return valMsgs;\n}\n\nfunction main() {\n new_Me = fetchContactMail()\n if(new_Me.length > 0){\n   for(var i = new_Me.length-1; i >= 0; i--){\n     send_line(new_Me[i])\n   }\n }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br")])]),n("p",[n("img",{attrs:{src:a(337),alt:"gas2.png"}})]),s._v(" "),n("p",[s._v("ここまでの作業が上手くいってるかどうかを確認するためにテストをしてみましょう．")]),s._v(" "),n("ol",[n("li",[s._v("自分で自分に（ラベルした大学メアドの方）メールを送る")]),s._v(" "),n("li",[s._v("GAS上でmain関数を選択の上，実行してちゃんとLINEが来るか確認")])]),s._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",[s._v("1を行った後は素早く2を実行してください")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(338),alt:"gas3.png"}})]),s._v(" "),n("h2",{attrs:{id:"いざデプロイ！！！"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#いざデプロイ！！！"}},[s._v("#")]),s._v(" いざデプロイ！！！")]),s._v(" "),n("p",[s._v("テストが上手くいったら，いよいよデプロイしていきます．")]),s._v(" "),n("p",[s._v("実行ボタンの左にある時計ボタンでトリガー（何分置きにこのプログラムを実行するのか・メールを探索するのか）を設定していきます．")]),s._v(" "),n("p",[n("img",{attrs:{src:a(339),alt:"gas4.png"}})]),s._v(" "),n("p",[s._v("ジャンプ先で右下の「"),n("strong",[s._v("トリガーを追加")]),s._v("」をクリックしてください．\n↓画像のように設定し「"),n("strong",[s._v("保存")]),s._v("」をクリックしてください．")]),s._v(" "),n("p",[n("img",{attrs:{src:a(340),alt:"gas5.png"}})]),s._v(" "),n("p",[s._v("これでメールが来たらわざわざmain関数を実行せずとも1分おきにmain関数が実行され未読メールを探索してきてくれます．")]),s._v(" "),n("h2",{attrs:{id:"おわりに（雑談）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#おわりに（雑談）"}},[s._v("#")]),s._v(" おわりに（雑談）")]),s._v(" "),n("p",[s._v("今年から筑波大学に編入して，分からないことばかりなのに内部生徒の繋がりを全く持てず孤独感を味わっている毎日です．")]),s._v(" "),n("p",[s._v("早く内部生にあって「よろしく」言いたいです．たわいもない話や技術的な話で盛り上がりたいです．そういう環境的なものも含めて筑波大学には求めていたので，研究だけして卒業しそうな自分を憂いてます．")]),s._v(" "),n("p",[s._v("「僕はこんな人間だよ」的なものを置いとくので良かったらTwitter(@AnoTensai)で絡んでください．．．（気まぐれで鍵かけてるけど絶対フォロバします）")]),s._v(" "),n("h2",{attrs:{id:"参考文献"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[s._v("#")]),s._v(" 参考文献")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://qiita.com/Damon/items/bbe6350ef1a4a10fe397",target:"_blank",rel:"noopener noreferrer"}},[s._v("[Gmail to LINE]GASで新着メールをLINEに転送する"),n("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);