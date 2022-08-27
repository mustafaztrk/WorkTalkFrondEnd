import React from 'react'


export default function Home() {

    return (

        <div >
            
            <img src='http://devveri.com/wp-content/uploads/2015/09/kafka-logo-wide.png' />

            <h1>Apache Kafka Chat App</h1>
            <hr></hr>
           <center><p>
                Aşağıdaki sorulara göre araştırmalarınızı yapıp sonrasında detaylarını paylaşacağım 2 aşamalı projenizi herhangi bir programlama diliyle geliştirebilirsiniz.

            </p>
            
            <ul >
                <li>Kafka nedir?</li>
                <li>Ne işe yarar?</li>
                <li>Günümüz teknolojilerinde nerelerde kullanılır ve nasıl implement edilir?</li>
            </ul>
            <hr></hr>
            <p >Bu araştırmanın ardından projenin ilk fazında sizden 2 tane client uygulama yapmanızı rica edeceğim.
                Bu 2 client birbiriyle Kafka üzerinden haberleşecek. Chatleşir gibi birbirine mesaj gönderip mesaj alacaklar. Ancak aradaki protokolün Kafka üzerinden tasarlanması gerekiyor.</p>
            <hr></hr>
            <p>Eğer birinci fazı tamamlarsanız; projenin ikinci fazında da bu mesajların monitör edilmesi için ayrı bir uygulama yazmanızı rica edeceğim.
                Bu uygulama da Admin Monitoring Tool olacak aslında, yani bu 2 clientın birbirleri arasında Kafka’dan göndermiş oldukları mesajları görselleştirecek bir uygulama olacak.</p>
            <hr></hr>
            <p>
                <h1>Plus</h1>
                *Client uygulamalardaki mesajlar bir input vasıtasıyla da gönderilebilir, dummy random mesajlar da gönderilebilir bu tamamen sizin hayal gücünüze kalmış. Arayüz için kullanacağınız teknoloji de yine size kalmış Angular, React gibi güncel teknolojiler kullanırsanız bu size ekstra puan kazandıracaktır.
                *Admin Monitoring Tool’da bir Search Panel olması ve bu search işleminin “Elastic Search” üzerinden yapılması size ekstra puan kazandıracaktır.
                *Yapmış olduğunuz projeyi Docker Container üzerinde çalışacak şekilde tasarlarsanız bu da sizi bu staj döneminin en gözde stajyeri yapar😊
            </p>
            </center> 
        </div>
    )
}
