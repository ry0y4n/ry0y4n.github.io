(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{497:function(t,r,e){t.exports=e.p+"assets/img/sharding.fac607ef.png"},522:function(t,r,e){"use strict";e.r(r);var a=e(6),_=Object(a.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[t._v("以下の記事を引用してまとめた個人的メモ(引用先はサーベイに伴い随時追加)")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://gaiax-blockchain.com/sharding",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ethereumの処理能力を向上させるSharding（シャーディング）"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zoom-blc.com/sharding-ethereum",target:"_blank",rel:"noopener noreferrer"}},[t._v("シャーディングがイーサリアムのスケーラビリティ問題を解決する理由"),a("OutboundLink")],1)])]),a("h2",{attrs:{id:"前提"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前提"}},[t._v("#")]),t._v(" 前提")]),t._v(" "),a("p",[t._v("Ethereumの1秒間に処理できるトランザクションは7-15程度．")]),t._v(" "),a("p",[t._v("VISAは秒間56000．大きな差がある．")]),t._v(" "),a("p",[t._v("Vitalikは2015年にはブログでシャーディングによるスケーリングの向上を言及")]),t._v(" "),a("p",[t._v("2018年4月にはシャーディングのプルーフ・オブ・コンセプトを示した．")]),t._v(" "),a("h2",{attrs:{id:"シャーディングの概要と枠組み"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#シャーディングの概要と枠組み"}},[t._v("#")]),t._v(" シャーディングの概要と枠組み")]),t._v(" "),a("p",[t._v("検証ノードを「シャード」と呼ばれるグループに分けて，グループごとのシャードチェーンで分担してトランザクションと関連するステートの処理を行う．")]),t._v(" "),a("h3",{attrs:{id:"シャードの中身"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#シャードの中身"}},[t._v("#")]),t._v(" シャードの中身")]),t._v(" "),a("p",[t._v("シャードでのトランザクショングループはヘッダーとボディーに分かれ，ヘッダーにはシャードのデータと取引承認の署名(Signature)が入る．")]),t._v(" "),a("p",[t._v("シャードデータには，シャードIDと，シャード間をつなぐためのレシートのマークル木，そして取引が適用される前後の状態のマークル木などが含まれる(レシートはトランザクションのログ情報)．")]),t._v(" "),a("h3",{attrs:{id:"メインチェーンへの影響"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#メインチェーンへの影響"}},[t._v("#")]),t._v(" メインチェーンへの影響")]),t._v(" "),a("p",[t._v("メインのブロックチェーンレベルでは，通常のブロックに加え状態(state)のマークル木ルートと上述のトランザクショングループのマークル木ルートが加わっている．")]),t._v(" "),a("p",[t._v("トランザクショングループで正しい取引が行われ，かつ完全に承認された場合のみ，そのトランザクショングループは有効化されるようになっている．")]),t._v(" "),a("p",[t._v("つまり，それぞれのブロックに状態のマークル木ルート(state root)とトランザクショングループのマークル木ルート(Transaction group root)が加わっただけでブロックチェーンの枠組みは変わっていない．")]),t._v(" "),a("p",[t._v("2018年夏．シャーディングとは別に進行してた"),a("strong",[t._v("Casper")]),t._v("と呼ばれるPoSへの移行を一緒に進めようという流れ．")]),t._v(" "),a("p",[t._v("現在のEthereum Metropolisの次のSerenityでPoSに移行し，新しいブロックチェーンにシャーディングを導入する予定となった．この一連の計画をEthereum2.0という．")]),t._v(" "),a("h2",{attrs:{id:"シャード間のコミュニケーション"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#シャード間のコミュニケーション"}},[t._v("#")]),t._v(" シャード間のコミュニケーション")]),t._v(" "),a("p",[t._v("それぞれのシャードで，それぞれのシャード内に含まれる取引の計算と承認が行われてもシャード間でのデータのやり取りができないとネットワークとして機能しない．シャード間のコミュニケーションは**レシート(Receipt)**のやり取りによって行われる．")]),t._v(" "),a("h3",{attrs:{id:"レシート-receipt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#レシート-receipt"}},[t._v("#")]),t._v(" レシート(Receipt)")]),t._v(" "),a("p",[t._v("このレシートは，それぞれの取引に基づいて作られ他のシャードから見ることができるが改ざんはできない様になっている．レシートをシャード間で取引データとしてやり取りすることでコミュニケーションを行っていくという仕組み．\\")]),t._v(" "),a("p",[t._v("また，セキュリティ的な理由により，シャーディングはPoSを実装した後に導入するべきだと考えられている．")]),t._v(" "),a("h2",{attrs:{id:"シャーディングにposが必要な理由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#シャーディングにposが必要な理由"}},[t._v("#")]),t._v(" シャーディングにPoSが必要な理由")]),t._v(" "),a("p",[t._v("シャーディングは，すべてのノードがすべてのトランザクションの検証作業を行うのではなく，複数のノード群でトランザクションの検証作業を役割分担していくことだった．つまり，それぞれのシャードごとに状態が異なり独立して成り立っている．")]),t._v(" "),a("p",[t._v("なので，少ないマイナーのハッシュパワーによってセキュリティが維持されているノードに対して，攻撃が簡単になってしまうという問題がある．")]),t._v(" "),a("p",[t._v("例えば，シャードAとシャードBという2つのシャードに分かれて検証作業を行っているとします．そして，シャードAが全体の10％のハッシュパワーを持っていて，シャードBが90％のハッシュパワーを持っている場合，シャードAに対してはたった5.1%のハッシュパワーで51％攻撃が可能になってしまう．")]),t._v(" "),a("p",[t._v("つまり，PoWではセキュリティを維持しながら，マイナーが独立帝に働くかデザインすることが難しい(シャードごとにブロックチェーンが分かれているのではなく，ただ「状態」が異なるだけであることに注意)．")]),t._v(" "),a("p",[t._v("これをPoSで上記のような攻撃を防ぐことが可能．")]),t._v(" "),a("p",[t._v("イーサリアムで考えられているPoSのプロトコルでは，掛け金をデポジットしているバリデーター群をそれぞれのシャードごとに割り当てるだけでいいからである．")]),t._v(" "),a("p",[t._v("PoWではノードの計算を終えたマイナーがブロックを生成するので，実際にマイニングが成功するまでは匿名化されている状態といえる．そして，マイナーは自分の意志で℃のシャードで働くかを選択することができてしまう．")]),t._v(" "),a("p",[t._v("一方，PoSではあらかじめ掛け金をデポジットしている有効なバリデーター群が分かっているので，それらをシャードの規模に合わせて適切に担当を割り当てていくことができる．つまり，バリデーターは自分の意志でシャードを選択することができず，ただアルゴリズムに従うことになる．")]),t._v(" "),a("p",[t._v("このようにシャーディングの前にあらかじめPoSを導入していれば，セキュリティを維持しながら実装することができるので，シャーディングはPoSが前提の技術であると考えられている．")]),t._v(" "),a("h2",{attrs:{id:"ethereum2-0でのシャーディング"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ethereum2-0でのシャーディング"}},[t._v("#")]),t._v(" Ethereum2.0でのシャーディング")]),t._v(" "),a("p",[a("img",{attrs:{src:e(497),alt:"sharding.png"}})]),t._v(" "),a("p",[t._v("Beacon Chainを中心にShard Chainを含む無数のブロックチェーンの集合とみなせる．")]),t._v(" "),a("p",[t._v("なお，Ethereum2.0ではPoSが想定されているので検証ノードはステークとして32ETHをデポジットして検証ノードのプールに参加する．")]),t._v(" "),a("p",[t._v("脆弱なシャードができないように検証ノードは定期的にシャッフルされランダムなシャードに振り当てられる．")]),t._v(" "),a("p",[t._v("個々のシャードでは独自のブロックチェーンであるシャードチェーンが進行する．ビーコンチェーンに対してブロックを提案し，Commiteeと呼ばれる検証ノードの委員会の承認を経て，ビーコンチェーンに取り込まれる．ビーコンチェーンの情報も定期的にシャードチェーンに伝搬される．メインチェーンとシャードの動機については，Vitalikが以下の資料で解説している．")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://ethresear.ch/t/cross-links-between-main-chain-and-shards/1860",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cross-links between main chain and shards – Sharding – Ethereum Research"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"シャーディングの課題"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#シャーディングの課題"}},[t._v("#")]),t._v(" シャーディングの課題")]),t._v(" "),a("p",[t._v("EthereumにPoSとシャーディングが導入されると，ネットワークの中央集権化が進むのではという指摘がある．")]),t._v(" "),a("h2",{attrs:{id:"シャーディングの今後"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#シャーディングの今後"}},[t._v("#")]),t._v(" シャーディングの今後")]),t._v(" "),a("p",[t._v("シャーディングのロードマップがGitHub上に公開されている．")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/ethereum/wiki/wiki/Sharding-roadmap",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sharding roadmap · ethereum/wiki Wiki – GitHub"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("PoSのためにビーコンチェーンの導入から始まり，最下層のステートを扱うEVMを除いたシャーディングの導入，EVMも含むシャーディングの導入と進んでいくらしい．")]),t._v(" "),a("p",[t._v("EthereumがWorld Computerになるのはいつなのか．．．")])])}),[],!1,null,null,null);r.default=_.exports}}]);