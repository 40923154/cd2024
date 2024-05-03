var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/40923154/cd2024 網站: https://40923154.github.io/cd2024/ 簡報: https://40923154.github.io/cd2024/reveal 網誌: https://40923154.github.io/cd2024/blog","tags":"misc","url":"./pages/about/"},{"title":"2024 Spring 課程4","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統10 解決從個人倉儲推送資料更新到群組倉儲錯誤的問題 問題:在推送更新前沒有事先git pull，並且頭尾分頁沒有處理乾淨 解決方案:./acp\"xxx\"","tags":"w10","url":"./2024-Spring-w10-blog-tutorial.html"},{"title":"2024 Spring 課程4","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統9 練習與網路AI溝通並完成英文翻譯中文論文 更新:精簡摘要內容為下 第 6 章：Odoo 在 PLM 和 MES 方面的成就 本章將總結 Odoo 軟件在 PLM 和 MES 方面的優缺點，重點關注 4.2 節提出的問題，並討論在模擬過程中觀察到的 Odoo 功能及其局限性。 6.1 Odoo 如何處理項目？ 總體而言，Odoo 軟件為使用者提供了各種各樣的數字項目，可以用来表示制造以及其他業務方面的各個方面。這主要是因为 Odoo 的 ERP 功能使用項目來跟蹤其使用過程中的拉動和推送操作，這也是軟件實現自動化的方式。 6.1.1 產品生命週期的所有方面都得到體現了嗎？ 源于 ERP 系統的缺點之一是它關注 ERP 的主要範圍（圖 2），即生產和銷售。Odoo 中的項目反映了這一點。例如，在模擬過程中，盡管可以對生命週期的開發部分進行表示，但这感覺更像是對生產階段功能的延伸，而不是對開發本身的支持（圖 70）。例如，在開發原型時，許多步驟（例如創建 ECO 只是為了在開始時攜帶文件，以及每次對原型進行調整時都要經歷許多步驟）都顯得過於官僚或過於繁瑣。 6.1.2 每個項目的表現如何？ 項目的表示級別取決於項目的使用方式。一個很好的例子是產品項目對材料的關注。從某種意義上說，所有東西都被視為產品，原型或原材料之間幾乎沒有區別。 產品項目或 BOM 項目的表示非常高級，包含大量元數據和與其他項目 的有用連接。然而，即使在制造應用程序中，也有一些項目缺乏關注。例如，操作項目可以從更多的上傳功能中獲益匪淺，例如 3D 打印或 CNC 文件。隨著自動化在生產中變得越來越普遍，僅僅擁有 PDF 或幻燈片說明已經不夠了。此外，其他項目即使使用 ECO 也無法保存文件。 6.2 創建全新產品有多容易？ 產品創建是 Odoo 中最直接的流程之一，它實際上歸結為使用庫存應用程序或制造應用程序來創建新產品，然後填寫其元數據。 6.2.1 產品是如何描述的？ 產品的描述清晰簡潔，產品項目允許將圖像上傳到項目並用作圖標。Odoo 中產品項目的 ERP 性質意味著元數據相當偏向於用於管理存儲和庫存的信息（重量、體積、數量等），但該項目也允許書面描述，以及提供指向與產品相關的 BOM 和 ECO 的鏈接。 6.2.2 產品如何集成和引用相關文件？ Odoo 確實有在嘗試讓最有價值的項目（產品和 BOM）能夠管理和引用相關文件。然而，Odoo 在文件管理方面並沒有實現太多功能。它最多只能允許手動上傳和下載文件。這意味着，每當有人對文件進行更改時，都需要手動將其上傳到 ECO 中。除了操作項目之外，與大多數文件的集成是不存在的，因為指令文件可以在生產過程中在 Odoo 中打開和交互。 6.2.3 更改其中一個會影響另一個嗎？ 不會，Odoo 主要將文件視為供以後參考的文書工作。任何可能導致產品或 BOM 元數據發生變化的文件添加都需要有人意識到這種變化並手動更新信息。 6.3 創建全新生產流程有多容易？ 如前所述，最能代表流程的項目是物料清單。此項目類需要與現有產品關聯，除此之外，BOM 的創建並不比產品項目難。 6.3.1 流程是如何描述的？ 流程在 BOM 中描述為組件（其他產品項目）和操作的列表，這些組件和操作按照特定順序執行，以生產一定數量的最終產品。這種表示似乎與生產流程很吻合。元數據保持在最低限度，但仍然能夠提供文本描述。 6.3.2 流程如何與它生產的產品集成和引用？ BOM 和產品項目之間的集成是 Odoo 中做得最好的部分。BOM 中的更改會影響生產，并直接鏈接到產品。只要可以更改元數據，并且该方面也在產品項目中表示，則其中一個的更改將由另一個繼承。 6.3.3 更改其中一個會影響另一個嗎？ 就庫存和制造而言，集成和引用都得到了很好的實現。生產無縫地導致庫存發生變化，并且 GUI 的導航路徑也得到了很好的優化。從一個產品到另一個產品或導航到其他相關項目只需點擊 3 或 4 次。 6.4 改進现有產品/生產流程有多容易？ 如前所述，Odoo 中的所有改進都是使用工程變更單執行的。這些應用於產品項目或物料清單。創建 ECO 非常簡單且有條理，ECO 本身就是一個項目，象徵着創建更改的信號，一旦生效，它就象徵着產品或流程的增量。 6.4.1 更新其元數據有多容易？ 更新 Odoo 中任何項目的任何元數據都很容易；然而，明智的做法是指出，由于 ECO 是獨立的項目，只是由產品或 BOM 指向，因此許多更改不是自動的，需要人工干預。即 ECO 不會更改產品的文本描述。如果新更新需要更改該描述，則需要用戶在產品項目中進行手動干預。这样做很容易，但這是一項額外的任務，ECO 不會對其進行跟踪。 6.4.2 确定更改的影響有多容易？ Odoo 的信息反饋主要以制造訂單為基礎。可用的信息很清晰，并且 ECO 不會影響已經進行中的 MO，因此應用 ECO 的影響不難注意到。然而，需要注意的是，在顯示性能信息的方式中，沒有指示產品版本或應用的 ECO。這意味着用戶需要首先确定 ECO 是何時應用的，然后導航到數據中的等效 MO 來得出結論。盡管這對最近的更改不是問題，但如果有人想要分析舊更改的影響，這就會成為問題。 6.4.3 該軟件如何處理不同的產品版本？ 版本控制很好地涵蓋了產品/BOM 與鏈接的 ECO 之間的 1 對 N 關係。每個產品都有一個標籤，其中包含按時間順序應用于它的所有 ECO，有效地充當代表項目演變的時間線。 6.5 查找與產品或流程相關的數據有多容易？ 如前一章所述，與生產相關的 most 性能數據都集中在\"報告\"選項卡下（圖 71）。 這意味着就性能而言，很容易找到數據。前一章將展示在這些選項卡中可用的可能信息的示例。 除了使用此路徑外，產品項目的 UI 還有一個選項卡，指向與產品相關的每月生產量比較（圖 72）。如果 Odoo 的試用版中有多個時間段，這將更令人印象深刻。 6.5.1 查找生產數量有多容易？ 除了前面提到的方法之外，Odoo 還提供了一個單位預測圖，該圖記錄了庫存的進出情況。這對於估計銷售額和平衡存儲與需求特别有用（圖 73）。這項功能在本工作中沒有過多提及，因為供求關係与其說是 MES 功能，不如說是一個概述生產的有用工具。 6.5.2 Odoo 如何生成性能數據？ 敏銳的讀者會注意到，到目前為止提到的所有數據都來自已執行操作的完成時間、與 MO 相關的數量以及使用的工作中心。盡管如此，考虑到所有這些都是自動生成的，因此可以得出多少信息仍然令人印象深刻。 6.5.3 作為升級的結果，軟件如何呈現性能變化？ 为了識别變化，用户必須識别 MO 之後的更改，并查看基于此的差異。理想情况下，如果圖形信息顯示產品的版本，那就太好了，但 Odoo V13 中沒有提供。","tags":"w9","url":"./2024-Spring-w9-blog-tutorial.html"},{"title":"2024 Spring 課程4","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統6 心得:學習將個人倉儲的東西更新到群組倉儲。","tags":"w6","url":"./2024-Spring-w6-blog-tutorial.html"},{"title":"2024 Spring 課程4","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統5 心得:嘗試加入群組倉儲的子目錄 遇到問題是在近端會遇上無法推送問題。","tags":"w5","url":"./2024-Spring-w5-blog-tutorial.html"},{"title":"2024 Spring 課程3","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統4 心得:學習使用CUTCAP剪輯影片，加入字幕。並上傳到小組群組 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w4","url":"./2024-Spring-w4-blog-tutorial.html"},{"title":"2024 Spring 課程2","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統2 github 倉儲群組設立 和尋找組員","tags":"w3","url":"./2024-Spring-w3-blog-tutorial.html"},{"title":"2024 Spring 課程1","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統2 心得:更熟悉網誌推送操作 嘗試編寫網誌","tags":"w2","url":"./2024-Spring-w2-blog-tutorial.html"},{"title":"2024 Spring 課程1","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統2 心得:blog setup","tags":"w1","url":"./2024-Spring-w1-blog-tutorial.html"}]};