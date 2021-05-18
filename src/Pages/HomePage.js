import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import BooksCategories from '../Components/BooksCategories';
import './HomePage.css';


class HomePage extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container className="p-home">
                <Jumbotron className="home-jumbo">
                    <h1>תולעת ספרים</h1>
                    <h3>המלצות וביקורות ספרים למתקדמים</h3>
                </Jumbotron>
                <div className="main-text">
                    <p>אני תולעת ספרים. תמיד הייתי.</p>
                    <p>ושנים שקשה לי למצוא המלצות טובות לספרים.</p>
                    <p>כותבת בגוגל "המלצות לספרים" ומקבלת או את הקאסיקות שקראתי בגיל 15, או ג'אנק. הרבה ג'אנק.</p>
                    <p>אז החלטתי ליצור לי אתר משלי, לאנשים עם טעם דומה לשלי.</p>
                    <p>פה תוכלו למצוא המלצות לספרים שאהבתי, וכאלה שפחות, מחולקים לארבע קטגוריות, על פי כמה ששהתחברתי אליהם.</p>
                    <p>אבל שימו לב, פה זה לא מיינסטרים ולא המכנה המשותף הבינוני ומטה.</p>
                    <p>לא תמצאו פה רומן רומנטי ולא ספרי מתח לטיסות.</p>
                    <p>איך תדעו אם הטעם שלנו דומה? מבחן חיי פאי!</p>
                    <p>אהבתם? כנראה שאנחנו באותו ראש.</p>
                    <p>לא אהבתם? לכו לקרוא ג'וג'ו מוייס וניפרד כידידים.</p>
                    <p>אה, וגם אין כאן את הקלאסיקות המובנות מאליהן, מגרוסמן דרך אהבה בימי כולרה, מאה שנים של בדידות וכל השאר.</p>
                    <p>אם עדיין לא קראתם אותם אז בחייאת, זה הזמן להתחיל, ואחר כך נתקדם.</p>
                    <p>אוקיי?</p>
                </div>

                <div className="books-categories">
                    <BooksCategories 
                        category= "כמו שאומרים בגן: זה לא לטעמי"
                        goto="not-for-me"
                        />
                    <BooksCategories 
                        category="ספרים להעביר איתם בידוד בסביר"
                        goto="reasonable"
                        />
                    <BooksCategories 
                        category="ספרים שיגרמו לכם לפספס שבוע מהחיים (בקטע טוב)"
                        goto="week"
                        />
                    <BooksCategories 
                        category="ספרים שתזכרו לנצח נצחים"
                        goto="forever"
                        />
                </div>

                <div className="summary"> 
                    <p>האתר עדיין בהרצה וגם יש לי חיים לתחזק. מבטיחה להעלות פה כל ספר חדש שאקרא</p>
                    <p>מוזמנים להגיב ולכתוב לי</p>
                    <a href="mailto:michal_mor_1@yahoo.com" target="_blank">michal_mor_1@yahoo.com</a >
                    <h3>תהנו!</h3>
                    <span class="material-icons"><a href="fb://tolaatsfarim.michal" target="_blank"></a>facebook</span>
                </div>
                
            </Container>
           
        )
      
    }
}

export default HomePage;