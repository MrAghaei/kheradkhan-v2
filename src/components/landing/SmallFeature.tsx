import Image from "next/image";

function SmallFeature() {
  //region data
  const smallFeatureCardData = [
    {
      title: "هایلایت",
      icon: "landingHighlightIcon.svg",
      text: "با قابلیت هایلایت، می‌توانید جملات و بخش‌های مهم کتاب‌ها را ذخیره کنید و همیشه به آن‌ها دسترسی داشته باشید.",
    },
    {
      title: "ذخیره سازی",
      icon: "saveIcon.svg",
      text: "با قابلیت ذخیره سازی هایلایت‌ها، می‌توانید جملات و نکات مهم کتاب‌هایتان را در یک مکان مشخص نگهداری کنید و به راحتی به آن‌ها دسترسی پیدا کنید.",
    },
    {
      title: "مرور روزانه",
      icon: "landingReviewIcon.svg",
      text: "نکات مهمی که هایلایت کرده‌اید را هر روز مرور کنید و به راحتی یادآوری کنید. همچنین, نظرات و بازخوردهای خود را روی هر هایلایت ثبت کنید تا به تفکر عمیق‌تری دست یابید.",
    },
  ];
  //endregion
  return (
    <div className="flex mt-80 container justify-between mx-auto">
      <Image
        className="rounded-md"
        src={"/smallFeature.png"}
        alt={"Small Feature"}
        width={600}
        height={500}
      />
      <div className="flex flex-col gap-12 w-1/2" dir={"rtl"}>
        {smallFeatureCardData.map((data) => (
          <div key={data.title} className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <Image src={data.icon} alt={"icon"} width={52} height={52} />
              <h2 className="text-text1 text-3xl">{data.title}</h2>
            </div>
            <p className="text-text2">{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SmallFeature;
