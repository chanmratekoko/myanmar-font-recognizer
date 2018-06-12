# Myanmar Font Recognizer

This is the method used to recognize font in devices whether it is Myanmar unicode compatible or not. Web fonts might be the solution to most of the cases though, some mobile devices do not support unicode rendering correctly. Which is why this method is another alternative way to tackle unicode problem in unicode unsupported devices. 

### How does it work?

This method measures the width of Burmese consonant ‘က’ and ‘က္ခ’ and differentiate between them. If the width of ‘က’  is greater than or equal to ‘က္ခ’, this is unicode compatible and text can be shown correctly. There is a question why we differentiate with ‘ က္ခ’ instead of doing with ‘က္က’. We found that ‘ က္က’ looks greater in some of the unicode fonts. Another point is why ‘က’ is greater than or equal to ‘က္ခ’, in some browsers and mobile devices, the width of ‘က’ is greater than ‘က္ခ’.

### Sample

```javascript
if (isUnicode()) {
	document.write("Unicode Support <br />");
	document.write("တက်ကသိုလျ");
} else {
	document.write("Zawgyi Support <br />");
	document.write("တက္ကသိုလ်");
}
```

မြန်မာ Text အတွက် Developer  တွေကြုံတွေရတဲ့အခက်အခဲတခုဖြစ်တဲ့ သုံးစွဲသူရဲ့ စက် (Mobile Devices) သို့ ဘရောက်ဇာ (Browser) ရဲ့ ဖောင့် (Font) မှာ Unicode Text အဆင်ပြေမပြေ ကို သိရှိနိုင်မယ့် Method တခုဖြစ်ပါတယ်။ 
Web Font သုံးလျှင်အဆင်ပြေနိုင်ပေမယ့် တချို့သော Mobile Devices တွေမှာ Unicode Rendering အဆင်မပြေတာကြောင့် မှန်မှန်ကန်ကန်မပြပေးနိုင်ပါဘူး။ ဒီပြဿနာအတွက် ဒီ Method ကအဆင်ပြေလိမ့်မယ်လို့မျှော်လင့်ပါတယ်။

### ဘယ်လိုအလုပ်လုပ်သလဲ

မြန်မာ ဗျဉ်းဖြစ်တဲ့ 'က' ရဲ့ width ကိုတိုင်းတာပြီး 'က္ခ' ရဲ့ width နဲ့ တိုက်စစ်ပါတယ်။ 
'က' ရဲ့ width က 'က္ခ' ရဲ့ width ထက် ညီရမယ် (သို့)  ကြီး လျှင် Unicode Text အဆင်ပြေပြီးမှန်မှန်ကန်ကန်ပြနိုင်ပါတယ်။
ဒီနေရာမှာပြောစရာ ရှိတာက ဘာလို့ 'က္ခ' နဲ့တိုက်စစ်သလဲဆိုတာရယ်ပါ 'က္က' က တချို့သော Unicode Font တွေမှာ ကြီးနေတာတွေ့ ရပါတယ်။ 
နောက်တခုက 'က' ရဲ့ width က 'က္ခ' width ထက်ဘာလို့  ညီရမယ် (သို့) ကြီးရမယ် ဆိုတာရယ်ပါ တချို့သော ဘရောက်ဇာ (browser) နဲ့ သုံးစွဲသူရဲ့ စက် (Mobile Devices)  'က' ရဲ့ width က 'က္ခ' width ထက်ကြီးနေတကပ်ပါတယ်။

### အသုံးပြုပုံ

```javascript
if (isUnicode()) {
	document.write("Unicode Support <br />");
	document.write("တက်ကသိုလျ");
} else {
	document.write("Zawgyi Support <br />");
	document.write("တက္ကသိုလ်");
}
```

