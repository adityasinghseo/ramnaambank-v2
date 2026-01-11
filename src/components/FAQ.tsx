import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useTranslation } from "@/hooks/useTranslation";

const FAQ = () => {
  const { t, language } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Hindi FAQs (Original detailed content)
  const faqsHindi = [
    {
      question: "राम नाम लेखन क्यों करते हैं ?",
      answer: (
        <div className="space-y-4">
          <p>
            आज के व्यस्ततम समय में जब व्यक्ति अपनी उलझनों में इतना उलझ गया है कि रिश्ते नाते परिवार सभी से दिन प्रतिदिन लगातार दूर होता जा रहा है। सभी के लिए कितना कुछ भी क्यों न कर लिया जाए पर संसार में सिर्फ भगवान के नाम के अलावा कोई अपना नहीं है। जब तक आपके पास पैसा, धन, दौलत, शोहरत और ऐश ओ आराम है तब तक सभी आपके अपने है। जैसे ही आप पर बुरा समय आता है सभी अपनों के रंग रूप बदल जाते है। यह आपने अनुभव जरूर किया होगा और नहीं किया तो भगवान श्री राम आप पर अपनी कृपा बनाएं रखें क्योंकि आप भाग्यशाली है।
          </p>
          <p>
            इसलिए आप अभी से सचेत हो जाएं और रामनाम का जप, लेखन करना प्रारंभ कर दें। क्योंकि इस कलियुग में सिर्फ और सिर्फ राम नाम ही है जो आपको इस लोक से लेकर परलोक तक तार सकता है। कलियुग में राम नाम की विशेष महिमा है। जिसके सुमिरन मात्र से मनुष्य भगवान के परम पद को प्राप्त होता है। श्री राम चरित मानस में संत गोस्वामी तुलसीदास जी ने इसे विस्तार से बताया है।
          </p>
          <p className="font-bold text-primary">
            ""कलियुग के केवल नाम आधारा।
            <br />
            सुमिर सुमिर नर उतरही पारा ।।""
          </p>
          <p>
            जब हम घर, परिवार, संसार आदि की उलझनों में उलझ कर अपना सुख, चैन, शांति आदि सब खो बैठते हैं। उस स्थिति में सिर्फ और सिर्फ केवल राम का नाम ही है जोकि हमारे इस लोक से लेकर परलोक तक को सुधार सकता है तथा आध्यात्म की परम शांति को आपके जीवन में लाकर उसे सुखमय बना सकता है। इसलिए राम नाम जप और लेखन किया जाता है। क्योंकि राम में ही आराम है और राम में ही विश्राम है।
          </p>
          <p>
            इसलिए अपना जीवन सफल बनाने के लिए राम नाम जप या लेखन करते है। "एक बार आप राम नाम जप करना लेखन करना प्रारंभ कीजिए फिर देखिए आपके जीवन में आनंद कैसे आता है।"
          </p>
        </div>
      ),
    },
    {
      question: "राम नाम से क्या लाभ है ?",
      answer: (
        <div className="space-y-4">
          <p>
            राम नाम उस रसगुल्ले की तरह है जोकि मीठा और सिर्फ मीठा है। यानी उसे कभी भी खाओ दिन में या रात में उसका स्वाद सिर्फ मीठा ही होगा। अर्थात् राम नाम कैसे भी लो किसी भी प्रकार से लो उससे केवल आपको लाभ हो लाभ है। नुकसान कुछ नहीं..
          </p>
          <p>
            श्री रामचरित मानस में संत गोस्वामी तुलसीदास जी ने कहा है कि
          </p>
          <p className="font-bold text-primary">
            ब्रह्म राम ते नामु बड़ : बर दायक बर दानि।
            <br />
            राम चरित सत कोटि महँ, लिय महेस जियँ जानि: ।।
          </p>
          <p>
            अर्थात ब्रह्म और राम से भी राम नाम बड़ा है, वह वर देने वाले देवताओं को भी वर देने वाला है। श्री शंकर जी ने इस रहस्य को मन में समझकर ही राम चरित्र के सौ करोड़ श्लोकों में से (चुनकर दो अक्षर के इस) राम नाम को ही ग्रहण किया।
          </p>
          <p>
            राम नाम कितना पवित्र और आनंददायक है। इसलिए इस कलियुग में श्री राम नाम की प्रधानता है और यदि आप इस नाम का जप या सुमिरन करते है तो यह नाम आपको जन्म जन्मांतरों के बंधनों से मुक्त कराकर परम आनंद की प्राप्ति कराएगा और आपके इस लोक से लेकर आपके परलोक तक को संवार देगा।
          </p>
          <div>
            <h4 className="font-bold mb-2 text-lg">राम नाम लेखन से होने वाले मुख्य लाभ</h4>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>अंर्तमन का शुद्धिकरण, शांति स्थापित होना, मानसिक तनाव से मुक्ति।</li>
              <li>नकारात्मक ऊर्जा का प्रभाव खत्म होना।</li>
              <li>संसारिक तनाव ग्रसित रोगों का नाश होना।</li>
              <li>पितृ दोष संबंधी समस्या का दूर होना व पितृों की कृपा का प्राप्त होना।</li>
              <li>बिगड़े हुए यां अटके पड़े कार्यों का शीघ्रता से होना।</li>
              <li>कर्ज से मुक्ति होना और व्यापार में वृद्धि होना।</li>
              <li>मंदबुद्धि मनुष्यों में भी बौद्धिक विकास की वृद्धि होना।</li>
              <li>समस्त देवी देवताओं की कृपा का प्राप्त होना।</li>
              <li>इस लोक व परलोक में भी ईश्वरीय कृपा का प्राप्त होना।</li>
              <li>अपने साथ साथ अपने आने वाली पीढ़ियों की भी सदगति होना तथा संपूर्ण जीवन सुखमय होना।</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      question: "आखिर लिखे हुए राम नाम का क्या होता है ? लेखन पुस्तिका कहां जमा करें ?",
      answer: (
        <div className="space-y-4">
          <p>
            लिखा हुआ राम नाम सेवा क्षेत्र में विश्व की सबसे बड़ी संस्था श्री राम नाम विश्व बैंक समिति में जमा होता है। यदि आप राम नाम लिखते आ रहे है और आपके पास लिखा हुआ राम नाम या किसी भी भगवान का नाम है और आप सोच रहे है कि उसका क्या करें तो घबराएं नहीं उसे राम नाम सेवा क्षेत्र में सबसे बड़ी संस्था श्री राम नाम विश्व बैंक समिति में जमा कर सकते है।
          </p>
          <p>
            संस्था द्वारा वृहद स्तर पर श्री राम नाम संग्रहालय का निर्माण किया जा रहा है जहां आपके द्वारा लिखा गया राम नाम पूरे विधि विधान से सुरक्षित रखा जाता है।
          </p>
          <p>
            आप हमारी वेबसाइट <a href="https://www.shriramnaambank.com" className="text-primary hover:underline">www.shriramnaambank.com</a> पर जाकर अधिक जानकारी प्राप्त कर सकते है या हमारे आधिकारिक मोबाइल नंबर <a href="tel:9045000108" className="text-primary hover:underline">9045000108</a> पर भी संपर्क कर सकते है। या नीचे दिए पतों पर राम नाम लेखन सामग्री भेज सकते है या प्राप्त कर सकते है। संस्था द्वारा आपका एक खाता खोला जाएगा जिसमें आपके द्वारा लिखा गया राम नाम जमा किया जाएगा।
          </p>
          <div className="bg-primary/5 p-4 rounded-lg">
            <p className="font-semibold mb-2">संस्था का पता है :</p>
            <p>श्री राम नाम विश्व बैंक समिति आश्रम, बिल्केश्वर बाई पास रोड, निकट वेदाग्रीन बैंकट हाल, ललतारौ पुल हरिद्वार (उत्तराखंड) 249401</p>
            <div className="my-2 border-t border-primary/20"></div>
            <p>No.7 नई बस्ती रामगढ़ रोड़, खड़खड़ी हरिद्वार (उत्तराखंड) 249401</p>
            <div className="my-2 border-t border-primary/20"></div>
            <p>8 गोविंदपुरी, रानीपुर मोड, वुडलैंड शोरूम के ऊपर द्वितीय तल, हरिद्वार उत्तराखंड 249401</p>
          </div>
          <div>
            <p>Contact No. 9045000108 / 8868888601 / 9410110900</p>
            <p>Website : <a href="https://www.shriramnaambank.com" className="text-primary hover:underline">www.shriramnaambank.com</a> | raamnaambank@gmail.com</p>
          </div>
        </div>
      ),
    },
    {
      question: "श्री राम नाम विश्व बैंक समिति के पास अब तक कितना राम नाम जमा है ?",
      answer: (
        <div className="space-y-4">
          <p>
            श्री राम नाम सेवा क्षेत्र में विश्व की सबसे बड़ी संस्था श्री राम नाम विश्व बैंक समिति लगभग पिछले 37 वर्षों से रामनाम का संकलन करती आ रही है। तो जाहिर सी बात है कि संस्था के पास कई लाख करोड़ अरब की संख्या में राम नाम धन जमा है। लाखों लोगों के यहां खाते खुले हुए है। जिनका आज के समय बड़े स्तर पर संचालन होता है। एक समय राम नाम धन इतनी बड़ी संख्या में एकत्रित हो गया था कि उसे रखने के लिए जगह कम पड़ गई थी। तो हरिद्वार में कई मंदिर, आश्रम, धर्मशाला और यहां तक कि संस्था से जुड़े लोगों के घरों में राम नाम के बारे रखवाए गए थे। बहुत से बड़े बड़े हनुमान जी के मंदिरों और हनुमान जी की प्रतिमाओं में राम नाम लगवाया गया था। तब भी राम नाम रखने के लिए स्थान उपलब्ध नहीं हो पा रहा था।
          </p>
          <p>
            लेकिन भगवान ने कृपा की और हरिद्वार में अब एक बड़े भव्य और दिव्य संग्रहालय का निर्माण होने जा रहा है जहां आपको विश्व में सबसे ज्यादा हस्तलिखित राम नाम दर्शनों के लिए उपलब्ध होगा।
          </p>
        </div>
      ),
    },
    {
      question: "इतनी बड़ी संख्या में राम नाम कहां से आता है ?",
      answer: (
        <div className="space-y-4">
          <p>
            हमारा भारत देश आस्था का देश है। जहां हर व्यक्ति राम नाम से प्रभावित है और अपने घर परिवार और देश में राम राज्य की कल्पना करता है और राम नाम का सुमिरन, जप या लेखन करता है। राम नाम सेवा क्षेत्र की सबसे बड़ी संस्था श्री राम नाम विश्व बैंक समिति से देशभर में लाखों की संख्या में लोग जुड़े हुए है। जोकि राम नाम लिखकर संस्था को भेजते है ताकि उनके खातों में उनके द्वारा लिखे गए राम नाम सुरक्षित रखे जा सके। उसी प्रक्रिया के तहत पूरे देश के अलावा विदेशों से भी राम नाम संस्था के पास आता है और संस्था में जमा होता है।
          </p>
        </div>
      ),
    },
    {
      question: "राम नाम बैंक कहां है ?",
      answer: (
        <div className="space-y-4">
          <p>
            मुख्यतः राम नाम बैंक पूरे भारतवर्ष में लगभग हर राज्य में है। लेकिन इन सबका हेड ऑफिस हरिद्वार में स्थित है। जिसका नाम है श्री राम नाम विश्व बैंक समिति..
          </p>
          <p>
            जिनके लगभग पूरे भारत में 275 से ज्यादा शाखाएं है जहां राम नाम इक्कठा होता है और फिर पार्सल के रूप में पैक होकर हरिद्वार जाता है। जहां सबकी गिनती होती है तथा उसे व्यवस्थित तरीके से संग्रहालय में जमा करने के लिए तैयार किया जाता है।
          </p>
          <p>
            अधिक जानकारी आप संस्था के नंबर <a href="tel:9045000108" className="text-primary hover:underline">9045000108</a> या वेबसाइट <a href="https://www.shriramnaambank.com" className="text-primary hover:underline">www.shriramnaambank.com</a> पर प्राप्त कर सकते है।
          </p>
        </div>
      ),
    },
    {
      question: "श्री राम नाम बैंक से कैसे जुड़ें और कॉन्टेक्ट नंबर क्या है ?",
      answer: (
        <div className="space-y-4">
          <p>
            यदि आपके पास राम नाम लिखा हुआ है और आप इसे जमा करना चाहते है। या आप नए है और राम नाम लिखना चाहते है तो आप संस्था श्री राम नाम विश्व बैंक समिति के नीचे दिए नंबरों पर संपर्क कर सकते हैं।
          </p>
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
            <p className="font-bold">Contact No. 9045000108 / 8868888601 / 9410110900</p>
            <p>Website : <a href="https://www.shriramnaambank.com" className="text-primary hover:underline">www.shriramnaambank.com</a> | raamnaambank@gmail.com</p>
          </div>
          <div className="space-y-4 mt-4">
            <div>
              <h5 className="font-semibold text-primary">एड्रेस 1</h5>
              <p>संस्था का पता है : श्री राम नाम विश्व बैंक समिति आश्रम, बिल्केश्वर बाई पास रोड, निकट वेदाग्रीन बैंकट हाल, ललतारौ पुल हरिद्वार (उत्तराखंड) 249401</p>
            </div>
            <div>
              <h5 className="font-semibold text-primary">एड्रेस 2</h5>
              <p>No.7 नई बस्ती रामगढ़ रोड़, खड़खड़ी हरिद्वार (उत्तराखंड) 249401</p>
            </div>
            <div>
              <h5 className="font-semibold text-primary">एड्रेस 3</h5>
              <p>8 गोविंदपुरी, रानीपुर मोड, वुडलैंड शोरूम के ऊपर द्वितीय तल, हरिद्वार उत्तराखंड 249401</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      question: "लिखे हुए राम नाम का क्या होता है ?",
      answer: (
        <div className="space-y-4">
          <p>
            जब भी आप राम नाम जमा करते होंगे या आपने राम नाम के ऊपर शोध किया होगा तो आपके मन में ये सवाल जरूर आया होगा कि आखिर लिखे हुए राम नाम का क्या होता है ? क्योंकि इसे हम गंगा जी या नदी में प्रवाहित कर नहीं सकते क्योंकि उसमें प्रदूषण फैलेगा और जीव हत्या का पाप लगेगा। यदि मंदिर में चढ़ाकर आ जाएंगे तो उसके बाद मंदिर वाले इसका क्या करते होंगे ? यदि हम इसे आग लगा दें तो यह लिखा हुआ नाम नष्ट हो जाएगा आदि ऐसे तमाम सवाल आपके मन को कुरेदते होंगे।
          </p>
          <p>
            इसलिए आपकी संस्था श्री राम नाम विश्व बैंक समिति ने लिखे हुए राम नाम का सबसे ज्यादा सदुपयोग करती है। आप इसकी अधिक जानकारी वेबसाइट <a href="https://www.shriramnaambank.com" className="text-primary hover:underline">www.shriramnaambank.com</a> से या इनके आधिकारिक नंबर <a href="tel:9045000108" className="text-primary hover:underline">9045000108</a> से प्राप्त कर सकते हैं। क्योंकि अभी हाल ही में इन्होंने 51 लाख करोड़ से ज्यादा राम नाम अयोध्या के श्री राम मंदिर में लगवाया है। जिसकी जानकारी आपको इनकी वेबसाइट पर मिल जाएगी।
          </p>
        </div>
      ),
    },
    {
      question: "भारत में श्री राम नाम संग्रहालय कहां और कैसा होगा ?",
      answer: (
        <div className="space-y-4">
          <p>
            पूरे भारत के हर राज्य में श्री राम नाम बैंक की शाखाएं फैली हुई है। लेकिन इनका मुख्यालय हरिद्वार में स्थित है। जहां करोड़ों अरबों की संख्या में राम नाम जमा होता है। और इसका भव्य और दिव्य संग्रहालय हरिद्वार में बनेगा जोकि अपने आप में अद्भुत आकर्षण का केंद्र होगा। जिसका वर्णन कहकर नहीं अपितु दर्शन करके ही उसका आनंद लिया जा सकता है।
          </p>
          <p>
            अधिक जानकारी के लिए आप नीचे दिए गए नंबरों पर संपर्क कर सकते हैं।
          </p>
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
            <p className="font-bold">Contact No. 9045000108 / 8868888601 / 9410110900</p>
            <p>Website : <a href="https://www.shriramnaambank.com" className="text-primary hover:underline">www.shriramnaambank.com</a> | raamnaambank@gmail.com</p>
          </div>
          <div className="space-y-4 mt-4">
            <div>
              <h5 className="font-semibold text-primary">एड्रेस 1</h5>
              <p>संस्था का पता है : श्री राम नाम विश्व बैंक समिति आश्रम, बिल्केश्वर बाई पास रोड, निकट वेदाग्रीन बैंकट हाल, ललतारौ पुल हरिद्वार (उत्तराखंड) 249401</p>
            </div>
            <div>
              <h5 className="font-semibold text-primary">एड्रेस 2</h5>
              <p>No.7 नई बस्ती रामगढ़ रोड़, खड़खड़ी हरिद्वार (उत्तराखंड) 249401</p>
            </div>
            <div>
              <h5 className="font-semibold text-primary">एड्रेस 3</h5>
              <p>8 गोविंदपुरी, रानीपुर मोड, वुडलैंड शोरूम के ऊपर द्वितीय तल, हरिद्वार उत्तराखंड 249401</p>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-primary/30">
            <p className="font-bold text-lg mb-2">संस्था श्री राम नाम विश्व बैंक समिति द्वारा चलाए जा रहे जनहित कार्यों में सहयोग कैसे करें ?</p>
            <a href="/donation" className="text-primary hover:underline font-semibold flex items-center gap-2">
              अधिक जानकारी के लिए यहाँ क्लिक करें
            </a>
          </div>
        </div>
      ),
    },
  ];

  // English FAQs (Full detailed translations)
  const faqsEnglish = [
    {
      question: "Why do we write Ram Naam?",
      answer: (
        <div className="space-y-4">
          <p>
            In today's busiest times, when a person is so entangled in his problems that he is continuously moving away from relationships, family, and everyone day by day. No matter how much you do for everyone, in the world there is no one except God's name. As long as you have money, wealth, fame and luxury, everyone is yours. As soon as bad times come upon you, the colors and forms of all your loved ones change. You must have experienced this, and if you haven't, may Lord Shri Ram keep his grace upon you because you are fortunate.
          </p>
          <p>
            Therefore, be alert from now and start chanting and writing Ram Naam. Because in this Kaliyuga, only Ram Naam can take you from this world to the next world. Ram Naam has special glory in Kaliyuga. By merely remembering it, a person attains the supreme position of God. Saint Goswami Tulsidas Ji has explained this in detail in Shri Ram Charit Manas.
          </p>
          <p className="font-bold text-primary">
            "Kaliyug ke keval naam aadhara.
            <br />
            Sumir sumir nar utarahi para."
          </p>
          <p>
            When we get entangled in the complications of home, family, world, etc. and lose all our happiness, peace, tranquility, etc. In that situation, only Ram's name can improve this world and the next world and bring the supreme peace of spirituality into your life and make it happy. That's why Ram Naam chanting and writing is done. Because there is rest in Ram and there is peace in Ram.
          </p>
          <p>
            Therefore, to make your life successful, we chant or write Ram Naam. "Once you start chanting and writing Ram Naam, then see how joy comes into your life."
          </p>
        </div>
      ),
    },
    {
      question: "What are the benefits of Ram Naam?",
      answer: (
        <div className="space-y-4">
          <p>
            Ram Naam is like that rasgulla which is sweet and only sweet. That means whenever you eat it, day or night, its taste will only be sweet. That is, take Ram Naam in any way, you will only benefit from it. No harm at all.
          </p>
          <p>
            In Shri Ramcharit Manas, Saint Goswami Tulsidas Ji has said that
          </p>
          <p className="font-bold text-primary">
            Brahma Ram te naamu bada : bar dayak bar daani.
            <br />
            Ram charit sat koti mahan, liya mahes jiyan jaani: ||
          </p>
          <p>
            That is, Ram Naam is greater than Brahma and Ram, it is the giver of boons even to the gods who give boons. Lord Shankar understood this secret in his mind and adopted only Ram Naam (choosing these two letters) from the hundred crore verses of Ram's character.
          </p>
          <p>
            How pure and blissful Ram Naam is. Therefore, Shri Ram Naam has prominence in this Kaliyuga and if you chant or remember this name, this name will free you from the bondage of births and rebirths and give you supreme bliss and will improve this world and your next world.
          </p>
          <div>
            <h4 className="font-bold mb-2 text-lg">Main Benefits of Ram Naam Writing</h4>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Purification of inner mind, establishment of peace, freedom from mental stress.</li>
              <li>Elimination of the effect of negative energy.</li>
              <li>Destruction of diseases caused by worldly stress.</li>
              <li>Removal of problems related to Pitru Dosha and receiving the grace of ancestors.</li>
              <li>Quick completion of spoiled or stuck works.</li>
              <li>Freedom from debt and growth in business.</li>
              <li>Increase in intellectual development even in dull-witted people.</li>
              <li>Receiving the grace of all gods and goddesses.</li>
              <li>Receiving divine grace in this world and the hereafter.</li>
              <li>Salvation of your coming generations along with yourself and a happy life throughout.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      question: "What happens to the written Ram Naam? Where to submit the writing booklet?",
      answer: (
        <div className="space-y-4">
          <p>
            The written Ram Naam is deposited in the world's largest organization in the Ram Naam service area, Shri Ram Naam Vishwa Bank Samiti. If you have been writing Ram Naam and you have written Ram Naam or any God's name and you are thinking what to do with it, then don't worry, you can deposit it in the largest organization in the Ram Naam service area, Shri Ram Naam Vishwa Bank Samiti.
          </p>
          <p>
            The organization is building a grand Shri Ram Naam museum on a large scale where your written Ram Naam is kept safe with complete procedures.
          </p>
          <p>
            You can get more information by visiting our website <a href="https://www.shriramnaambank.com" className="text-primary hover:underline">www.shriramnaambank.com</a> or you can also contact our official mobile number <a href="tel:9045000108" className="text-primary hover:underline">9045000108</a>. Or you can send or receive Ram Naam writing material at the addresses given below. An account will be opened for you by the organization in which your written Ram Naam will be deposited.
          </p>
          <div className="bg-primary/5 p-4 rounded-lg">
            <p className="font-semibold mb-2">Organization Address:</p>
            <p>Shri Ram Naam Vishwa Bank Samiti Ashram, Bilkeshwar Bypass Road, Near Vedagreen Banquet Hall, Laltarao Bridge Haridwar (Uttarakhand) 249401</p>
            <div className="my-2 border-t border-primary/20"></div>
            <p>No.7 Nai Basti Ramgarh Road, Khadkhadi Haridwar (Uttarakhand) 249401</p>
            <div className="my-2 border-t border-primary/20"></div>
            <p>8 Govindpuri, Ranipur Mod, Above Woodland Showroom Second Floor, Haridwar Uttarakhand 249401</p>
          </div>
          <div>
            <p>Contact No. 9045000108 / 8868888601 / 9410110900</p>
            <p>Website : <a href="https://www.shriramnaambank.com" className="text-primary hover:underline">www.shriramnaambank.com</a> | raamnaambank@gmail.com</p>
          </div>
        </div>
      ),
    },
    {
      question: "How much Ram Naam has been deposited with Shri Ram Naam Vishwa Bank Samiti so far?",
      answer: (
        <div className="space-y-4">
          <p>
            Shri Ram Naam Vishwa Bank Samiti, the world's largest organization in the Ram Naam service area, has been collecting Ram Naam for the past 37 years. So it is obvious that the organization has Ram Naam wealth deposited in the number of lakhs, crores and billions. Millions of people have accounts opened. Which are operated on a large scale today. At one time, Ram Naam wealth was collected in such large numbers that there was not enough space to keep it. So in Haridwar, bags of Ram Naam were kept in many temples, ashrams, dharamshalas and even in the homes of people associated with the organization. Ram Naam was installed in many large temples of Hanuman Ji and idols of Hanuman Ji. Even then there was no space available to keep Ram Naam.
          </p>
          <p>
            But God has been kind and now a grand and divine museum is going to be built in Haridwar where you will be able to see the most handwritten Ram Naam in the world.
          </p>
        </div>
      ),
    },
    {
      question: "Where does Ram Naam come from in such large numbers?",
      answer: (
        <div className="space-y-4">
          <p>
            Our India is a country of faith. Where every person is influenced by Ram Naam and imagines Ram Rajya in his home, family and country and chants, meditates or writes Ram Naam. Millions of people across the country are associated with Shri Ram Naam Vishwa Bank Samiti, the largest organization in the Ram Naam service area. Who write Ram Naam and send it to the organization so that their written Ram Naam can be kept safe in their accounts. Under the same process, Ram Naam comes to the organization from abroad as well as from the whole country and is deposited in the organization.
          </p>
        </div>
      ),
    },
    {
      question: "Where is Ram Naam Bank?",
      answer: (
        <div className="space-y-4">
          <p>
            Mainly Ram Naam Bank is in almost every state across India. But the head office of all these is located in Haridwar. Whose name is Shri Ram Naam Vishwa Bank Samiti.
          </p>
          <p>
            Which has more than 275 branches across India where Ram Naam is collected and then packed in the form of parcels and goes to Haridwar. Where everyone is counted and prepared to be deposited in the museum in an organized manner.
          </p>
          <p>
            For more information, you can contact the organization's number <a href="tel:9045000108" className="text-primary hover:underline">9045000108</a> or website <a href="https://www.shriramnaambank.com" className="text-primary hover:underline">www.shriramnaambank.com</a>.
          </p>
        </div>
      ),
    },
    {
      question: "How to join Shri Ram Naam Bank and what is the contact number?",
      answer: (
        <div className="space-y-4">
          <p>
            If you have written Ram Naam and want to deposit it. Or you are new and want to write Ram Naam, then you can contact the organization Shri Ram Naam Vishwa Bank Samiti on the numbers given below.
          </p>
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
            <p className="font-bold">Contact No. 9045000108 / 8868888601 / 9410110900</p>
            <p>Website : <a href="https://www.shriramnaambank.com" className="text-primary hover:underline">www.shriramnaambank.com</a> | raamnaambank@gmail.com</p>
          </div>
          <div className="space-y-4 mt-4">
            <div>
              <h5 className="font-semibold text-primary">Address 1</h5>
              <p>Organization Address: Shri Ram Naam Vishwa Bank Samiti Ashram, Bilkeshwar Bypass Road, Near Vedagreen Banquet Hall, Laltarao Bridge Haridwar (Uttarakhand) 249401</p>
            </div>
            <div>
              <h5 className="font-semibold text-primary">Address 2</h5>
              <p>No.7 Nai Basti Ramgarh Road, Khadkhadi Haridwar (Uttarakhand) 249401</p>
            </div>
            <div>
              <h5 className="font-semibold text-primary">Address 3</h5>
              <p>8 Govindpuri, Ranipur Mod, Above Woodland Showroom Second Floor, Haridwar Uttarakhand 249401</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      question: "What happens to the written Ram Naam?",
      answer: (
        <div className="space-y-4">
          <p>
            Whenever you deposit Ram Naam or if you have researched on Ram Naam, this question must have arisen in your mind that what happens to the written Ram Naam? Because we cannot flow it in Ganga Ji or river because it will spread pollution and there will be sin of killing living beings. If you offer it in the temple and come back, then what do the temple people do with it? If we set it on fire, this written name will be destroyed, etc. Many such questions will prick your mind.
          </p>
          <p>
            Therefore, your organization Shri Ram Naam Vishwa Bank Samiti makes the best use of the written Ram Naam. You can get more information about this from the website <a href="https://www.shriramnaambank.com" className="text-primary hover:underline">www.shriramnaambank.com</a> or from their official number <a href="tel:9045000108" className="text-primary hover:underline">9045000108</a>. Because recently they have installed more than 51 lakh crore Ram Naam in Shri Ram Temple in Ayodhya. You will get information about this on their website.
          </p>
        </div>
      ),
    },
    {
      question: "Where and what will be the Shri Ram Naam Museum in India?",
      answer: (
        <div className="space-y-4">
          <p>
            Shri Ram Naam Bank branches are spread across every state in India. But their headquarters is located in Haridwar. Where Ram Naam is deposited in the number of crores and billions. And its grand and divine museum will be built in Haridwar which will be a center of wonderful attraction in itself. Whose description cannot be told but its joy can be enjoyed only by seeing it.
          </p>
          <p>
            For more information, you can contact the numbers given below.
          </p>
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
            <p className="font-bold">Contact No. 9045000108 / 8868888601 / 9410110900</p>
            <p>Website : <a href="https://www.shriramnaambank.com" className="text-primary hover:underline">www.shriramnaambank.com</a> | raamnaambank@gmail.com</p>
          </div>
          <div className="space-y-4 mt-4">
            <div>
              <h5 className="font-semibold text-primary">Address 1</h5>
              <p>Organization Address: Shri Ram Naam Vishwa Bank Samiti Ashram, Bilkeshwar Bypass Road, Near Vedagreen Banquet Hall, Laltarao Bridge Haridwar (Uttarakhand) 249401</p>
            </div>
            <div>
              <h5 className="font-semibold text-primary">Address 2</h5>
              <p>No.7 Nai Basti Ramgarh Road, Khadkhadi Haridwar (Uttarakhand) 249401</p>
            </div>
            <div>
              <h5 className="font-semibold text-primary">Address 3</h5>
              <p>8 Govindpuri, Ranipur Mod, Above Woodland Showroom Second Floor, Haridwar Uttarakhand 249401</p>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-primary/30">
            <p className="font-bold text-lg mb-2">How to cooperate in the public welfare works being run by the organization Shri Ram Naam Vishwa Bank Samiti?</p>
            <a href="/donation" className="text-primary hover:underline font-semibold flex items-center gap-2">
              Click here for more information
            </a>
          </div>
        </div>
      ),
    },
  ];

  // Select FAQs based on current language
  const faqs = language === 'hindi' ? faqsHindi : faqsEnglish;

  return (
    <section id="faq" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4 font-hind">
            {t.faq.title}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto font-hind leading-relaxed">
            {t.faq.subtitle}
          </p>
        </div>

        {/* FAQ Accordions */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="overflow-hidden border border-primary/20 shadow-sm hover:shadow-md transition-all duration-300 bg-white/90 backdrop-blur-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full flex items-center justify-between p-5 text-left font-hind text-lg font-medium transition-colors duration-300 ${openIndex === index ? "bg-[#0b1b36] text-white" : "text-secondary hover:text-primary"
                  }`}
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-white" : "text-muted-foreground"
                    }`}
                />
              </button>
              {openIndex === index && (
                <CardContent className="px-5 pb-5 pt-5 text-foreground/90 font-hind text-base leading-relaxed animate-fade-in-up bg-white">
                  {faq.answer}
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12 animate-fade-in-up">
          <p className="text-lg text-muted-foreground font-hind">
            {t.faq.contactText}{" "}
            <span className="text-primary font-semibold">
              9045000108 / 8868888601 / 9410110900
            </span>
          </p>
          <p className="text-muted-foreground font-hind">
            Website: <a href="https://www.shriramnaambank.com" className="text-primary hover:underline">www.shriramnaambank.com</a> | Email: raamnaambank@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
