/* src/components/ui/drawer/drawerContent.ts */
export const drawerContent = {
    /* CurrentIncomes */
    personalBudget: {
        description: `תקציב מינימום לתא משפחתי של חברי קיבוץ שאותו מחויב
הקיבוץ להבטיח למשפחת חברים העומדת בקריטריונים, לאחר חישוב הכנסתה מעבודה
ומקצבאות שונות. חישוב התק"ה נעשה לפי גובה שכר מינימום במשק – מתעדכן מעת לעת -
לכל חבר בוגר בתא המשפחתי )יחד/זוג( ותוספת 1/3 משכר המינימום במשק לכל ילד מתחת
לגיל 4 ו- 1/4 משכר המינימום לכל ילד מעל גיל 4 ועד גיל .18 `,
        budgetingMethod: `תקציב אישי חבר/ה - 2887
        תקציב משפחתי(שני חברי משק) - 4954`,
    },
    childrenAddition: {
        description: `תקציב ילדים לפי מערכות חינוך`,
        budgetingMethod: `מיץ פטל: 794,
תות: 878,
סביון: 605,
פשוש: 605,
רימון: 663,
פעמון: 894,
דובדבן: 921,
אורנים: 1072,
נעורים: 1146`,
    },
    provisions: {
        description: `תקציב מזון`,
        budgetingMethod: `בני המשפחה x ש״ח 772 + מספר הילדים x 683 ש״ח`,
    },
    laundry: {
        description: `תקציב כביסה`,
        budgetingMethod: `61 ש״ח X בני המשפחה`,
    },
    gas: {
        description: `תקציב גז`,
        budgetingMethod: `92 ש״ח`,
    },
    hygiene: {
        description: `תקציב היגיינה`,
        budgetingMethod: `44 ש״ח`,
    },
    maintenance: {
        description: `אחזקה`,
        budgetingMethod: `94 ש״ח`,
    },
    vehicle: {
        description: `תקציב רכב`,
        budgetingMethod: `547 ש״ח לחבר/ה`,
    },
    energy: {
        description: `אנרגיה`,
        budgetingMethod: `269 ש״ח לחבר/ה`,
    },
    outsourcedFood: {
        description: `תקציב כלכלה לעובדי חוץ`,
        budgetingMethod: `למילוי אישי`,
    },
    seniorityAddition: {
        description: `חבר ותיק – חבר שהתקבל לחברות טרם מועד אישור הצעה זו`,
        budgetingMethod: `תוספת ותק לחבר/ה - 41 כפול מספר שנות הותק. מקסימום שנות ותק:25`,
    },
    welfare: {
        description: `השתתפות קיבוץ בהוצאות רווחה`,
        budgetingMethod: `30% מהוצאות הרווחה`,
    },
    // partnerSeniorityAddition:
    // deceasedSeniorityAddition:
    /* CurrentExpenses */
    // gasExpenses,
    electricityExpenses: {
        description: `חיוב חשמל`,
        budgetingMethod: `177 ש״ח X בני המשפחה`,
    },
    maintenanceServiceExpenses: {
        description: `חיוב אחזקה`,
        budgetingMethod: `63 ש״ח`,
    },
    houseMaintenanceExpenses: {
        description: `הוצאות על תחזוקת בית`,
        budgetingMethod: `למילוי עצמי`,
    },
    networkingExpenses: {
        description: `תקשורת`,
        budgetingMethod: `100 ש״ח`,
    },
    internetExpenses: {
        description: `אינטרנט ושירותי כבלים נוספים`,
        budgetingMethod: `למילוי עצמי`,
    },
    // schoolExpenses:
    // highSchoolExpenses:
    privateLessonExpenses: {
        description: `חיוב שיעורים פרטיים`,
        budgetingMethod: `כיסוי מלא עבור שיעור ראשון`,
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
        description: `הכנסה חייבת במס )שכר ברוטו( - הכנסה מעבודה משלח יד או עסק לפני ניכויי מס הכנסה,
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
        description: `הכנסה חייבת במס )שכר ברוטו( - הכנסה מעבודה משלח יד או עסק לפני ניכויי מס הכנסה,
ביטוח לאומי, מס בריאות, הפרשות לפנסיה וכדומה.`,
        budgetingMethod: `למילוי עצמי`,
    },
    futurePensionAllowance: {
        description: `פנסיית מטרה - גובה הפנסיה, בוותק מלא, שהקיבוץ יבטיח השלמתה עם פרישת החבר
מעבודה.`,
        budgetingMethod: `6783 ש״ח לגמלאי/ת`,
    },
    futurePartnerPensionAllowance: {
        description: `פנסיית מטרה - גובה הפנסיה, בוותק מלא, שהקיבוץ יבטיח השלמתה עם פרישת החבר
מעבודה.`,
        budgetingMethod: `6783 ש״ח לגמלאי/ת`,
    },
    futureNationalInsuranceAllowance: {
        description: `קצבת נכות`,
        budgetingMethod: `קצבת נכות כללית היא קצבה חודשית המשולמת על-ידי המוסד לביטוח לאומי לבוגרים/ילדים שליקוי גופני, שכלי או נפשי פוגע ב-50% לפחות מכושרם להשתכר למחייתם (או בכושר לתפקד במשק הבית לעקרות בית). הזכאות לקצבת נכות עשויה להקנות הטבות נוספות בתחומים שונים, כגון דיור, תחבורה ובריאות. בפורטל זה תמצאו את השלבים בתהליך התביעה לקבלת קצבת נכות וכן את הזכויות וההטבות הניתנות למקבלי הקצבה.`,
    },
    futureNationalInsuranceAllowanceCommunity: {
        description: `קצבת ילדים - קצבה מהמוסד לביטוח לאומי הניתנת בגין ילדים עד גיל .18`,
        budgetingMethod: `
        ילד אחד: 164 ש״ח,
        שני ילדים: 371 ש״ח,
        שלושה ילדים: 578 ש״ח,
        ארבעה ילדים: 785 ש״ח,
        חמישה ילדים: 992 ש״ח,
        שישה ילדים: 1156 ש״ח,
        `,
    },
    futureElderlyPension: {
        description: `קצבת זקנה - קצבה מהמוסד לביטוח לאומי הניתנת למי שהגיע לגיל פרישה בהתאם לכללי
הביטוח הלאומי.`,
        budgetingMethod: `2234 ש״ח לחבר/ה. חבר/ה אשר הוא/היא אלמן/נה זכאים לתוספת 1748 ש״ח`,
    },
    futurePartnerElderlyPension: {
        description: `קצבת זקנה - קצבה מהמוסד לביטוח לאומי הניתנת למי שהגיע לגיל פרישה בהתאם לכללי
הביטוח הלאומי.`,
        budgetingMethod: `2234 ש״ח לחבר/ה`,
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
        description: `קרן השתלמות`,
        budgetingMethod: `7.5% מגובה שכר הברוטו`,
    },
    futurePartnerEducationFund: {
        description: `קרן השתלמות`,
        budgetingMethod: `7.5% מגובה שכר הברוטו`,
    },
    futureWelfareIncomes: {
        description: `זיכוי בגין רווחה`,
        budgetingMethod: `השתתפות בגובה 30% מסך הוצאות הרווחה`,
    },
    futureDentistIncomes: {
        description: `זיכוי בגין טיפולי שיניים`,
        budgetingMethod: `השתתפות בגובה 50% מסך הוצאות הטיפולים`,
    },
    futurePartnerDentistIncomes: {
        description: `זיכוי בגין טיפולי שיניים`,
        budgetingMethod: `השתתפות בגובה 50% מסך הוצאות הטיפולים`,
    },
    futureChildrenDentistIncomes: {
        description: `זיכוי בגין טיפולי שיניים עבור ילדים`,
        budgetingMethod: `השתתפות בגובה 50% מסך הוצאות הטיפולים`,
    },
    futureFamilySafetyNet: {
        description: `"רשת ביטחון" – השלמה כספית לתא משפחתי הזכאי לכך, בתנאים וברמה שנקבעו על ידי
הקהילה, המבטיחה את הכנסת התא המשפחתי, או, מבטיחה שהוצאות המשפחה בתחומי
הבריאות והחינוך לא יעלו על אחוז מוגדר מהכנסת המשפחה, בהתאם לקריטריונים שייקבעו
מעת לעת`,
        budgetingMethod: `"רשת ביטחון" – השלמה כספית לתא משפחתי הזכאי לכך, בתנאים וברמה שנקבעו על ידי
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
        budgetingMethod: `1000 ש״ח על בסיס חודשי לעוברים למודל המתחדש`,
    },
    futureChildrenSafetyNet: {
        description: `רשת ביטחון עבור הוצאות חינוך`,
        budgetingMethod: `.סך שווי הוצאות החינוך כפי שנקבעו בתק״ה בהפחתת סך ההוצאות החודשי  
        
        מיץ פטל: 1767,
        תות: 1767,
        סביון: 1392,
        פשוש: 1392,
        רימון: 1392,
        פעמון: 1392,
        דובדבן: 1392,
        אורנים: 1392,
        נעורים: 1392

        הערה: רק משפחות שימצאו כזכאיות לרשת ביטחון משפחתית תהיינה גם זכאיות לרשת ביטחון חינוך.סך שווי הוצאות החינוך כפי שנקבעו בתק״ה בהפחתת סך ההוצאות החודשי`,
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
        budgetingMethod: `43 ש״ח שטח הדירה במטראז׳ כפול `,
    },
    futureWaterAndSewerExpenses: {
        description: `חיוב מים וביוב`,
        budgetingMethod: `מספר בני המשפחה X  85 ש״ח`,
    },
    // futureGasExpenses:
    // futureElectricityExpenses:
    futureEnergyExpenses: {
        description: `חיוב אנרגיה`,
        budgetingMethod: `מספר בני המשפחה X 177`,
    },
    futureHouseMaintenanceExpenses: {
        description: `חיוב אחזקה`,
        budgetingMethod: `250 ש״ח`,
    },
    futureNetworkingExpenses: {
        description: `תקשורת`,
        budgetingMethod: `100 ש״ח`,
    },
    futureInternetExpenses: {
        description: `כבלים, אינטרנט ושירותי רשת נוספים`,
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
    futureKindergartenExpenses: {
        description: `חיוב עבור שכ״ל לילד/ה בגן חובה או פעוטון`,
        budgetingMethod: `חיוב מלא. כל משפחה מזדכה ב-2000 ש״ח לשנה עבור הוצאות שכ״ל לילד`,
    },
    futureSchoolExpenses: {
        description: `חיוב עבור שכ״ל ללילד הלומד ביסודי`,
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
        description: `ביטוח רפואי )"ביטוח בריאות"( - שירותי בריאות שמכסה חברת הביטוח כמוגדר בפוליסת
הביטוח.`,
        budgetingMethod: `
        ביטוח בריאות למבוגר: 226 ש״ח,
        ביטוח בריאות לילד: 75 ש״ח
        `,
    },
    futureFoodExpenses: {
        description: `הוצאות מזון לא כולל חד״א`,
        budgetingMethod: `למילוי עצמי`,
    },
    futureDiningRoomExpenses: {
        description: `חיוב מזון לאוכלים בחד״א`,
        budgetingMethod: ``,
    },
    futureLaundryExpenses: {
        description: `חיוב כביסה`,
        budgetingMethod: `חברי משק שיבחו להשתמש בשירותי המכבסה יחויבו לפי ק״ג`,
    },
    futureFlatTaxExpenses: {
        description: `מס אחיד – "מס יישובי" המשמש כמקור לשירותים הקהילתיים–מוניציפליים של הקיבוץ.
המס אחיד לחברי הקיבוץ ולתושבים.`,
        budgetingMethod: `750 ש״ח לחבר/ה`,
    },
    futureGrossTaxExpenses: {
        description: `מס הכנסה – המס על ההכנסה בתלוש השכר על פי כללי ומדרגות המס הנהוגים במדינה.
המיסוי חל על כל מרכיבי הכנסה החייבת במס כמקובל במדינה: שעות נוספות, הוצאות נסיעה,
אש"ל או ארוחות, טלפון, זקיפת הכנסה בגין רכב צמוד, שי לחג וכד'.`,
        budgetingMethod: `0.6% מגובה שכר הברוטו הכולל`,
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
