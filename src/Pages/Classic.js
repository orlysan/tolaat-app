import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

class Classic extends React.Component{

    render(){
        return(
            <div>
                <Jumbotron>
                    <h1>קלסיקות שחייבים לקרוא</h1>
                    <h2>ההמלצות שלי</h2>
                </Jumbotron>
                <Container>
                    <h5>שוב מתחילה בהתגוננות: מדובר בטעם האישי שלי. בטוח ששכחתי המון קלסיקות שחייבות להיכנס לרשימה ויש גם הרבה ספרים  שפשוט לא אהבתי (לא עושה פה שיימניג)</h5>
                    <h5>מוזמנים להגיב ולהוסיף את הקלאסיקות שלכם</h5>
                </Container>
            </div>
        )
    }
}

export default Classic