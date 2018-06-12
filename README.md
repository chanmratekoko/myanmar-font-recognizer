# myanmar-font-recognizer
Myanmar Font Typeface Recognizer

မြန်မာ Text အတွက် Developer  တွေကြုံတွေရတဲ့အခက်အခဲတခုဖြစ်တဲ့ သုံးစွဲသူရဲ့ စက် (Mobile Devices)  သို့ ဘရောက်ဇာ (Browser) ရဲ့ ဖောင့် (Font) မှာ Unicode Text အဆင်ပြေမပြေ ကို သိရှိနိုင်မယ့် Method တခုဖြစ်ပါတယ်။ 
Web Font သုံးလျှင်အဆင်ပြေနိုင်ပေမယ့် တချို့သော Mobile Devices တွေမှာ Unicode Rendering အဆင်မပြေတာကြောင့် မှန်မှန်ကန်ကန်မပြပေးနိုင်ပါဘူး။ ဒီပြဿနာအတွက် ဒီ Method ကအဆင်ပြေလိမ့်မယ်လို့မျှော်လင့်ပါတယ်။

### ဘယ်လိုအလုပ်လုပ်သလဲ

မြန်မာ ဗျဉ်းဖြစ်တဲ့ 'က' ရဲ့ width ကိုတိုင်းတာပြီး 'က္ခ' ရဲ့ width ကိုတိုင်းတာ ပြီး 'က' ရဲ့ width နဲ့ 'က္ခ' ရဲ့ width ကို တိုက်စစ်ပါတယ်
'က' ရဲ့ width က 'က္ခ' ရဲ့ width ထက် ညီရမယ် (သို့)  ကြီး လျှင် Unicode Text အဆင်ပြေပြီးမှန်မှန်ကန်ကန်ပြနိုင်ပါတယ်။
ဒီနေရာမှာပြောစရာ ရှိတာက ဘာလို့  'က္ခ'  နဲ့တိုက်စစ်သလဲဆိုတာရယ်ပါ 'က္က' က တချို့သော Unicode Font တွေမှာ ကြီးနေတာတွေ့ ရပါတယ်။ 
'က' ရဲ့ width က 'က္ခ' width ထက်ဘာလို့  ညီရမယ် (သို့)  ကြီး  ရမယ်ဆိုတာရယ်ပါ ဘရောက်ဇာ (browser) နဲ့ သုံးစွဲသူရဲ့ စက် (Mobile Devices)  တချို့မှာ 'က' ရဲ့ width က 'က္ခ' width ထက်ကြိးနေတကပ်ပါတယ်။

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

