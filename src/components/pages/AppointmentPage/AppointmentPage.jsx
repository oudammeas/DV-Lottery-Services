import React from "react";
import { Container, Content, Footer, Calendar, Badge } from "rsuite";
import MainLayout from "../../layouts/MainLayout.js/MainLayout";
import { useTranslation } from "react-i18next";
import { dateFns } from "date-fns";

const AppointmentPage = () => {


    const styles = {
        content: {
            padding: "5em",
            minHeight: "40em",
            maxWidth: "100%",
            margin: "0 auto",
            textAlign: "start",
            calendar: {
                width: 400,

            }
        },


    };


    function getTodoList(date) {

        // const day = dateFns.getDate(date);

        // switch (day) {
        //     case 10:
        //         return [
        //             { time: '10:30 am', title: 'Meeting' },
        //             { time: '12:00 pm', title: 'Lunch' }
        //         ];
        //     case 15:
        //         return [
        //             { time: '09:30 pm', title: 'Products Introduction Meeting' },
        //             { time: '12:30 pm', title: 'Client entertaining' },
        //             { time: '02:00 pm', title: 'Product design discussion' },
        //             { time: '05:00 pm', title: 'Product test and acceptance' },
        //             { time: '06:30 pm', title: 'Reporting' },
        //             { time: '10:00 pm', title: 'Going home to walk the dog' }
        //         ];
        //     default:
        //         return [];
        // }
    };

    function renderCell(date) {

        // const list = getTodoList(date);

        // if (list.length) {
        //     return <Badge className="calendar-todo-item-badge" />;
        // }

        // return null;
    };


    return (
        <MainLayout>
            <Content style={styles.content}>

                <div style={styles.content.calendar}>
                    <Calendar compact bordered renderCell={renderCell} />{' '}
                </div>

            </Content>
        </MainLayout>
    );
};

AppointmentPage.propTypes = {};

export default AppointmentPage;