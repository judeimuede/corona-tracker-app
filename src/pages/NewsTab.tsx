import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol, IonImg } from '@ionic/react';
import moment from 'moment';
import ExploreContainer from '../components/ExploreContainer';
import './NewsTab.css';

const NewsTab: React.FC = () => {
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonRow>
          <IonCol size="3"><IonImg class="appIcon" src="assets/icon/coronatracker_favicon.png" alt="WorldIcon"></IonImg></IonCol>
          <IonCol class="appTitle">Corona Pandemic Tracker</IonCol>
          <IonCol size="3" class="appDate">{moment().format('MMMM Do')}</IonCol>
        </IonRow>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonToolbar>
        <IonTitle>Latest News</IonTitle>
      </IonToolbar>
      <ExploreContainer name="Tab 1 page" />
    </IonContent>
  </IonPage>
  );
};

export default NewsTab;
