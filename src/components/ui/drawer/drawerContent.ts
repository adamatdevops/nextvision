/* src/components/ui/drawer/drawerContent.ts */
export const drawerContent = {
    /* CurrentIncomes */
    personalBudget: {
        description: `תקציב מינימום לתא משפחתי של חברי קיבוץ שאותו מחויב
הקיבוץ להבטיח למשפחת חברים העומדת בקריטריונים, לאחר חישוב הכנסתה מעבודה
ומקצבאות שונות. חישוב התק"ה נעשה לפי גובה שכר מינימום במשק – מתעדכן מעת לעת -
לכל חבר בוגר בתא המשפחתי )יחד/זוג( ותוספת 1/3 משכר המינימום במשק לכל ילד מתחת
לגיל 4 ו- 1/4 משכר המינימום לכל ילד מעל גיל 4 ועד גיל .18 `,
        budgetingMethod: `.תקציב אישי חבר/ה : 2887 ש״ח.
        תקציב משפחתי(שני חברי משק): 4954 ש״ח`,
    },
    childrenAddition: {
        description: `תקציב ילדים לפי מערכות חינוך`,
        budgetingMethod: `מיץ פטל: 794 ש״ח,
תות: 878 ש״ח,
סביון: 605 ש״ח,
פשוש: 605 ש״ח,
רימון: 663 ש״ח,
פעמון: 894 ש״ח,
דובדבן: 921 ש״ח,
אורנים: 1072 ש״ח,
נעורים: 1146 ש״ח`,
    },
    provisions: {
        description: `תקציב מזון`,
        budgetingMethod: `הקצבה של 772 ש״ח לכל בן משפחה, בתוספת 683 ש״ח לכל ילד`,
    },
    laundry: {
        description: `תקציב כביסה`,
        budgetingMethod: `הקצבה של 61 ש״ח לכל בן/ת משפחה`,
    },
    gas: {
        description: `תקציב גז`,
        budgetingMethod: `הקצבה של 92 ש״ח לכל חבר/ה`,
    },
    hygiene: {
        description: `תקציב היגיינה`,
        budgetingMethod: `הקצבה של 44 ש״ח לכל בן/ת משפחה`,
    },
    maintenance: {
        description: `אחזקה`,
        budgetingMethod: `הקצבה של 94 ש״ח לכל חבר/ה`,
    },
    vehicle: {
        description: `תקציב רכב`,
        budgetingMethod: `הקצבה של 547 ש״ח לחבר/ה`,
    },
    energy: {
        description: `חשמל`,
        budgetingMethod: `הקצבה של 264 ש״ח לחבר/ה`,
    },
    benefitForWork: {
        description: `רכיב שכר (תשלום או הטבה בשווה כסף) שנועד להניע את העובד לפעול בצורה טובה יותר, בתחום מסוים או בכל תחומי עבודתו. את גובה התמריץ מקובל לקבוע לפי הישגיו האישיים של העובד, אך נהוגים גם תמריצים הנקבעים לפי הישגי צוות, מחלקה ואף לפי הישגי הארגון כולו.`,
        budgetingMethod: `למילוי אישי`,
    },
    outsourcedFood: {
        description: `תקציב כלכלה לעובדי חוץ`,
        budgetingMethod: `למילוי אישי`,
    },
    chronicleTreatment: {
        description: `השתתפות קיבוץ בהוצאות עבור טיפולים או תרופות כרוניות`,
        budgetingMethod: `למילוי אישי`,

    },
    seniorityAddition: {
        description: `חבר ותיק – חבר שהתקבל לחברות טרם מועד אישור הצעה זו`,
        budgetingMethod: `תוספת ותק לחבר/ה: 41 ש״ח לכל שנת ותק. מקסימום שנות ותק: 25 שנים`,
    },
    welfare: {
        description: `השתתפות קיבוץ בהוצאות רווחה`,
        budgetingMethod: `השתתפות של הקהילה ב-30% מסך הוצאות הרווחה`,
    },
    other: {
        description: `אחר`,
        budgetingMethod: `הכנסה אחרת אשר אינה נכללת בסימולטור`,
    },

    /* CurrentExpenses */
    // gasExpenses,
    electricityExpenses: {
        description: `חיוב חשמל`,
        budgetingMethod: `חיוב של 177 ש״ח לכל ב/ת משפחה`,
    },
    maintenanceServiceExpenses: {
        description: `חיוב אחזקה`,
        budgetingMethod: `חיוב של 63 ש״ח לכל בן/ת משפחה`,
    },
    houseMaintenanceExpenses: {
        description: `הוצאות על תחזוקת בית`,
        budgetingMethod: `למילוי עצמי`,
    },
    networkingExpenses: {
        description: `תקשורת`,
        budgetingMethod: `חיוב של 100 ש״ח למשפחה`,
    },
    internetExpenses: {
        description: `אינטרנט ושירותי כבלים נוספים`,
        budgetingMethod: `למילוי עצמי`,
    },
    // schoolExpenses:
    // highSchoolExpenses:
    privateLessonExpenses: {
        description: `חיוב שיעורים פרטיים`,
        budgetingMethod: `כיסוי מלא עבור עלות שיעור ראשון`,
    },
    teenageClassExpenses: {
        description: `חיוב בגין חוגי העשרה`,
        budgetingMethod: `כיסוי מלא עבור חוג ראשון. השתתפות בחוג שני ושלישי`,
    },
    // tuitionsExpenses:
    // dentistExpenses:
    partnerDentistExpenses: {
        description: `חיוב בגין טיפולי שיניים`,
        budgetingMethod: `כיסוי מלא לחברי משק`,
    },
    childrenDentistExpenses: {
        description: `חיוב בגין טיפולי שיניים עבור ילדים`,
        budgetingMethod: `כיסוי מלא לבני משפחה של חברי המשק`,
    },
    foodExpenses: {
        description: `הוצאות מזון לא כולל חד״א`,
        budgetingMethod: `למילוי עצמי`,
    },
    diningRoomExpenses: {
        description: `הוצאות כלכלת חד״א`,
        budgetingMethod: `למילוי עצמי`,
    },
    /* FutureIncomes */
    // futurePersonalBudget:
    futureNetIncome: {
        description: `הכנסה נטו - הכנסה מעבודה אחרי ניכויי מס הכנסה, ביטוח לאומי, מס בריאות, הפרשות
לפנסיה וניכויים נוספים בהתאם להוראות החוק וניכוי מס פנימי על עבודה וחלף עבודה ומס
אחיד.`,
        budgetingMethod: `למילוי עצמי`,
    },
    futureGrossIncome: {
        description: `הכנסה חייבת במס (שכר ברוטו) - הכנסה מעבודה משלח יד או עסק לפני ניכויי מס הכנסה,
ביטוח לאומי, מס בריאות, הפרשות לפנסיה וכדומה.`,
        budgetingMethod: `למילוי עצמי`,
    },
    futurePartnerNetIncome: {
        description: `הכנסה נטו - הכנסה מעבודה אחרי ניכויי מס הכנסה, ביטוח לאומי, מס בריאות, הפרשות
לפנסיה וניכויים נוספים בהתאם להוראות החוק וניכוי מס פנימי על עבודה וחלף עבודה ומס
אחיד.`,
        budgetingMethod: `למילוי עצמי`,
    },
    futurePartnerGrossIncome: {
        description: `הכנסה חייבת במס (שכר ברוטו) - הכנסה מעבודה משלח יד או עסק לפני ניכויי מס הכנסה,
ביטוח לאומי, מס בריאות, הפרשות לפנסיה וכדומה.`,
        budgetingMethod: `למילוי עצמי`,
    },
    futurePensionAllowance: {
        description: `פנסיית מטרה - גובה הפנסיה, בוותק מלא, שהקיבוץ יבטיח השלמתה עם פרישת החבר
מעבודה.`,
        budgetingMethod: `זכאות ל-6783 ש״ח לכל גמלאי/ת`,
    },
    futurePartnerPensionAllowance: {
        description: `פנסיית מטרה - גובה הפנסיה, בוותק מלא, שהקיבוץ יבטיח השלמתה עם פרישת החבר
מעבודה.`,
        budgetingMethod: `זכאות ל-6783 ש״ח לכל גמלאי/ת`,
    },
    futureNationalInsuranceAllowance: {
        description: `קצבת נכות`,
        budgetingMethod: `קצבת נכות כללית היא קצבה חודשית המשולמת על-ידי המוסד לביטוח לאומי לבוגרים/ילדים שליקוי גופני, שכלי או נפשי פוגע ב-50% לפחות מכושרם להשתכר למחייתם (או בכושר לתפקד במשק הבית לעקרות בית). הזכאות לקצבת נכות עשויה להקנות הטבות נוספות בתחומים שונים, כגון דיור, תחבורה ובריאות. בפורטל זה תמצאו את השלבים בתהליך התביעה לקבלת קצבת נכות וכן את הזכויות וההטבות הניתנות לחברי הקצבה.`,
    },
    futureNationalInsuranceAllowanceCommunity: {
        description: `קצבת ילדים - קצבה מהמוסד לביטוח לאומי הניתנת בגין ילדים עד גיל .18`,
        budgetingMethod: `
        ילד אחד: 164 ש״ח,
        שני ילדים: 371 ש״ח,
        שלושה ילדים: 578 ש״ח,
        ארבעה ילדים: 785 ש״ח,
        חמישה ילדים: 992 ש״ח,
        שישה ילדים: 1156 ש״ח
        `,
    },
    futureElderlyPension: {
        description: `תושב ישראל שהגיע לגיל פרישה, זכאי לקצבת זיקנה מהמוסד לביטוח-לאומי רק אם הכנסותיו אינן עולות על סכום הקבוע בחוק, בהתאם להרכב משפחתו. תושב שמלאו לו 70 שנה - לגבר, 67 שנה - לאשה, זכאי לקצבת זיקנה ללא התחשבות בגובה הכנסותיו.`,
        budgetingMethod: `זכאות של 2234 ש״ח לחבר/ה. חבר/ה אשר הוא/היא אלמן/נה זכאים לתוספת של 1748 ש״ח`,
    },
    futurePartnerElderlyPension: {
        description: `תושב ישראל שהגיע לגיל פרישה, זכאי לקצבת זיקנה מהמוסד לביטוח-לאומי רק אם הכנסותיו אינן עולות על סכום הקבוע בחוק, בהתאם להרכב משפחתו. תושב שמלאו לו 70 שנה - לגבר, 67 שנה - לאשה, זכאי לקצבת זיקנה ללא התחשבות בגובה הכנסותיו.`,
        budgetingMethod: `זכאות של 2234 ש״ח לחבר/ה`,
    },
    futureRecoveryFee: {
        description: `דמי הבראה`,
        budgetingMethod: `דמי הבראה הם תשלום שעל מעביד בישראל לשלם לעובד, מכוח צו הרחבה בעניין זה, או מכוח הסכם קיבוצי.`,
    },
    futurePartnerRecoveryFee: {
        description: `דמי הבראה`,
        budgetingMethod: `דמי הבראה הם תשלום שעל מעביד בישראל לשלם לעובד, מכוח צו הרחבה בעניין זה, או מכוח הסכם קיבוצי.`,
    },
    futureEducationFund: {
        description: `תוכנית חיסכון המופעלת על-ידי חברות השקעה והאיגודים המקצועיים. החיסכון בקרן השתלמות נובע משני מקורות: ניכוי מהעובד והפרשת המעביד, שניהם נקבעים בהסכם העבודה שחל על העובד, ומחושבים באחוזים מסוימים משכרו של העובד המהווה בסיס לקרן השתלמות`,
        budgetingMethod: `זכאות ל-7.5% מגובה שכר הברוטו`,
    },
    futurePartnerEducationFund: {
        description: `תוכנית חיסכון המופעלת על-ידי חברות השקעה והאיגודים המקצועיים. החיסכון בקרן השתלמות נובע משני מקורות: ניכוי מהעובד והפרשת המעביד, שניהם נקבעים בהסכם העבודה שחל על העובד, ומחושבים באחוזים מסוימים משכרו של העובד המהווה בסיס לקרן השתלמות`,
        budgetingMethod: `זכאות ל-7.5% מגובה שכר הברוטו`,
    },
    futureWelfareIncomes: {
        description: `זיכוי בגין רווחה`,
        budgetingMethod: `השתתפות הקהילה בגובה 30% מסך הוצאות הרווחה`,
    },
    futureDentistIncomes: {
        description: `זיכוי בגין טיפולי שיניים`,
        budgetingMethod: `השתתפות הקהילה בגובה 50% מסך הוצאות הטיפולים`,
    },
    futurePartnerDentistIncomes: {
        description: `זיכוי בגין טיפולי שיניים`,
        budgetingMethod: `השתתפות הקהילה בגובה 50% מסך הוצאות הטיפולים`,
    },
    futureChildrenDentistIncomes: {
        description: `זיכוי בגין טיפולי שיניים עבור ילדים`,
        budgetingMethod: `השתתפות הקהילה בגובה 50% מסך הוצאות הטיפולים`,
    },
    futureFamilySafetyNet: {
        description: `"רשת ביטחון" – השלמה כספית לתא משפחתי הזכאי לכך`,
        budgetingMethod: `"רשת ביטחון" – השלמה כספית בתנאים וברמה שנקבעו על ידי
הקהילה, המבטיחה את הכנסת התא המשפחתי, או, מבטיחה שהוצאות המשפחה בתחומי
הבריאות והחינוך לא יעלו על אחוז מוגדר מהכנסת המשפחה, בהתאם לקריטריונים שייקבעו
מעת לעת
בסימולטור זה הוצאות רשת הביטחון של הילדים הינן נפרדות מרשת הביטחון המשפחתית.
`,
    },
    futureChildrenAddition: {
        description: `השלמה בגין הוצאות ילדים`,
        budgetingMethod: `השלמה או זכאות להשתתפות חודשית אשר נפרדת מרשת הביטחון החינוכית`,
    },
    futureAdaptationGrant: {
        description: `מענק הסתגלות`,
        budgetingMethod: `זכאות לתגמול חודשי ע״ס 1000 ש״ח לכל חבר/ה אשר בחר לעבור למודל המתחדש. משך הזכאות: תקופת המעבר מהמודל השיתופי למתחדש`,
    },
    futureChildrenSafetyNet: {
        description: `רשת ביטחון עבור הוצאות חינוך`,
        budgetingMethod: `סך שווי הוצאות החינוך כפי שנקבעו בתק״ה בהפחתת סך הוצאות החינוך החודשי

        מיץ פטל: 1767 ש״ח,
        תות: 1767 ש״ח,
        סביון: 1392 ש״ח,
        פשוש: 1392 ש״ח,
        רימון: 1392 ש״ח,
        פעמון: 1392 ש״ח,
        דובדבן: 1392 ש״ח,
        אורנים: 1392 ש״ח,
        נעורים: 1392 ש״ח

        הערה: רק משפחות שימצאו כזכאיות לרשת ביטחון משפחתית תהיינה גם זכאיות לרשת ביטחון חינוך בהתאמה לסך שווי הוצאות החינוך כפי שנקבעו בתק״ה בהפחתת סך ההוצאות החודשי`,
    },
    // futureProvisions: {
    //    description: `כיסוי הוצאות מזון כולל חד״א`,
    //    budgetingMethod: ``,
    //},
    // futureLaundry:
    // futureGas:
    // futureHygiene:
    // futureMaintenance:
    // futureVehicle:
    // futureEnergy:
    // futureBenefitForWork:
    // futureOutsourcedFood:
    // futureChronicleTreatment:
    /* FutureExpenses */
    futurePropertyTaxExpenses: {
        description: `ארנונה`,
        budgetingMethod: `חיוב של 43 ש״ח לכל מ״ר משטח הדירה במטראז׳`,
    },
    futureWaterAndSewerExpenses: {
        description: `חיוב מים וביוב`,
        budgetingMethod: `חיוב של 85 ש״ח לכל בן משפחה`,
    },
    // futureGasExpenses:
    // futureElectricityExpenses:
    futureEnergyExpenses: {
        description: `חיוב אנרגיה`,
        budgetingMethod: `חיוב של 177 ש״ח לכל ב/ת משפחה`,
    },
    futureHouseMaintenanceExpenses: {
        description: `חיוב אחזקה`,
        budgetingMethod: `חיוב של 250 ש״ח למשפחה`,
    },
    futureGardeningExpenses: {
        description: `הוצאות נוי, שיפוץ ודקורציה`,
        budgetingMethod: `למילוי עצמי`,
    },
    futureNetworkingExpenses: {
        description: `תקשורת`,
        budgetingMethod: `חיוב של 100 ש״ח למשפחה`,
    },
    futureInternetExpenses: {
        description: `כבלים, אינטרנט ושירותי רשת נוספים`,
        budgetingMethod: `למילוי עצמי`,
    },
    futureVehicleExpenses: {
        description: `הוצאות תחבורה`,
        budgetingMethod: `למילוי עצמי`,
    },
    futureEducationSystemExpenses: {
        description: `חיוב עבור מערכת חינוך`,
        budgetingMethod: `
    מיץ פטל: 3675 ש״ח,
    תות: 3333 ש״ח,
    סביון: 3162 ש״ח,
    פשוש: 1966 ש״ח,
    רימון: 1966 ש״ח,
    פעמון: 1500 ש״ח,
    דובדבן: 1500 ש״ח,
    אורנים: 1000 ש״ח,
    נעורים: 600 ש״ח`,
    },
    futureEducationExpenses: {
        description: `הוצאות חינוך משתנות`,
        budgetingMethod: `הוצאות נוספות שהן מעבר לסכום הקבוע של שכר הלימוד ו/או הסעת הילדים אשר הכרחיות לחינוך הילדים, כגון: ילקוט, ציוד, וכו׳. הוצאות חינוך משתנות אינן נכללות בחישוב רשת ביטחון חינוך`,

    },
    futureKindergartenExpenses: {
        description: `חיוב עבור שכ״ל לילד/ה בגן חובה או פעוטון`,
        budgetingMethod: `חיוב מלא. כל משפחה מזדכה ב-2000 ש״ח לשנה עבור הוצאות תשלומי גן חובה/פעוטון לילד`,
    },
    futureSchoolExpenses: {
        description: `חיוב עבור שכ״ל לילד הלומד ביסודי`,
        budgetingMethod: `חיוב שכ״ל חודשי/שנתי מלא. כל משפחה מזדכה ב-2000 ש״ח לשנה עבור הוצאות שכ״ל לילד`,
    },
    futureHighSchoolExpenses: {
        description: `חיוב עבור שכ״ל ללילד הלומד בתיכון`,
        budgetingMethod: `חיוב שכ״ל חודשי/שנתי מלא. כל משפחה מזדכה ב-2000 ש״ח לשנה עבור הוצאות שכ״ל לילד`,
    },
    // educationTuitionFees:
    futurePrivateLessonExpenses: {
        description: `חיוב שיעורים פרטיים`,
        budgetingMethod: `חיוב מלא למעט חברי משק אשר מזדכים בגין רשת ביטחון חינוך`,
    },
    futureTeenageClassExpenses: {
        description: `חיוב חוגי העשרה`,
        budgetingMethod: `חיוב מלא למעט חברי משק אשר מזדכים בגין רשת ביטחון חינוך`,
    },
    futureEducationTransportationExpenses: {
        description: `הוצאות תחבורה`,
        budgetingMethod: `עבור ילדים שלומדים בזלמן אר״ן קיים כיסוי מטעם המועצה. עבור משפחות המסיעות את ילדיהן באופן פרטי החיוב הוא עצמי`,
    },
    futureEducationPersonalCareExpenses: {
        description: `הוצאות בגין טיפול מיוחד`,
        budgetingMethod: `עבור ילדים שלומדים הזכאים לשעות טיפול פרטני ומיוחד`,
    },
        futureEducationDayCareExpenses: {
        description: `הוצאות צהרון`,
        budgetingMethod: `עבור ילדים שנשלחים לצהרון`,
    },
    // futureTuitionsExpenses:
    // futureSafetyNetExpenses:
    futureHealthInsuranceExpenses: {
        description: `רוב תושבי ישראל מבוטחים בביטוח בריאות במסגרת חוק ביטוח בריאות ממלכתי, החל משנת 1995. עד לאותה שנה היתה ההצטרפות לביטוח רפואי וולונטרית.

השירות הרפואי, שלו זכאי כל תושב ישראל על פי חוק ביטוח בריאות ממלכתי, ניתן באמצעות קופת החולים שהוא חבר בה. `,
        budgetingMethod: `
        ביטוח בריאות למבוגר: 226 ש״ח,
        ביטוח בריאות לילד: 75 ש״ח
        `,
    },
    futureDentistExpenses: {
        description: `הוצאות טיפולי שיניים לחבר/ה`,
        budgetingMethod: `השתתפות של 50% מטעם הקהילה`,
    },
    futurePartnerDentistExpenses: {
        description: `הוצאות טיפולי שיניים לחבר/ה`,
        budgetingMethod: `השתתפות של 50% מטעם הקהילה`,
    },
    futureChildrenDentistExpenses: {
        description: `הוצאות טיפולי שיניים לילד`,
        budgetingMethod: `השתתפות של 50% מטעם הקהילה`,
    },
    futureWelfareExpenses: {
        description: `הוצאות רווחה`,
        budgetingMethod: `השתתפות של 50% מטעם הקהילה`,
    },
    futureAlimonyExpenses: {
        description: `דמי מזונות`,
        budgetingMethod: `למילוי עצמי`,
    },
    futureCleaningExpenses: {
        description: `הוצאות ניקיון`,
        budgetingMethod: `למילוי עצמי`,
    },
    futureFoodExpenses: {
        description: `הוצאות מזון וכלכלה שוטפות לא כולל חד״א`,
        budgetingMethod: `למילוי עצמי`,
    },
    futureDiningRoomExpenses: {
        description: `חיוב מזון לאוכלים בחד״א`,
        budgetingMethod: ``,
    },
    futureLaundryExpenses: {
        description: `חיוב כביסה`,
        budgetingMethod: `חברי משק שיבחרו להשתמש בשירותי המכבסה יחויבו לפי ק״ג`,
    },
    futureFlatTaxExpenses: {
        description: `מס אחיד – "מס יישובי" המשמש כמקור לשירותים הקהילתיים–מוניציפליים של הקיבוץ.
המס אחיד לחברי הקיבוץ ולתושבים.`,
        budgetingMethod: `חיוב של 750 ש״ח לחבר/ה`,
    },
    futureGrossTaxExpenses: {
        description: `מס הכנסה – המס על ההכנסה בתלוש השכר על פי כללי ומדרגות המס הנהוגים במדינה.
המיסוי חל על כל מרכיבי הכנסה החייבת במס כמקובל במדינה: שעות נוספות, הוצאות נסיעה,
אש"ל או ארוחות, טלפון, זקיפת הכנסה בגין רכב צמוד, שי לחג וכד'.`,
        budgetingMethod: `חיוב של 0.6% מגובה שכר הברוטו הכולל`,
    },
    futureOtherIncome: {
        description: `אחר`,
        budgetingMethod: `הכנסה אחרת אשר אינה נכללת בסימולטור`,

    },
    futureOtherExpenses: {
        description: `אחר`,
        budgetingMethod: `הוצאה אחרת אשר אינה נכללת בסימולטור`,
    }
};
