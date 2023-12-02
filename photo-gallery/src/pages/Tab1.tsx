import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonListHeader, IonItem, IonLabel } from '@ionic/react';
import React, {useState, useEffect} from 'react';
import './Tab1.css';

const Tab1: React.FC = () => {
  // dataset state variable to hold JSON data from WP
  const [dataset, setDataset] = useState([]);
  // URL for WP JSON REST endpoint
  const dataURL = "https://dev-cs-55-13-cb.pantheonsite.io/wp-json/twentytwentyone-child/v1/hello";
  // useEffect() to get JSON data and populate dataset state variable
  useEffect(() => {
    fetch(dataURL) // fetch() to load raw json string
    .then(response => response.json()) // json() to convert raw string to json object
    .then(data => setDataset(data)) // react state set function to populate data state var
  },[])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>hello</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">hello</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* use map() to loop through JSON array returned from WP */}
        <IonList id="thing-list">
          <IonListHeader>hello</IonListHeader>
          {dataset.map((item, index) => (
            <IonItem lines="inset" key={index}>
              <IonLabel>
                <h4>{item.post_title}</h4>
                <p>{item.post_date}</p>
                <address>{item.post_status}</address>
                <p>{item.post_content}</p>
                 </IonLabel>
            </IonItem>
          ))}
        </IonList>
        <IonList>
  <img src="https://images.fineartamerica.com/images/artworkimages/medium/3/4-levi-ackerman-scott-cartwright.jpg" alt="Levi akerman"></img>
</IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
