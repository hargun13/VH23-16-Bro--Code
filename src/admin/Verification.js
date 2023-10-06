import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc } from 'firebase/firestore';
import { db } from '../firebase';
import VerificationCard from './VerificationCard';


const Verification = () => {
  const [verificationData, setVerificationData] = useState([]);

  async function fetchVerificationData() {
    try {
      // const collectionName = 'PrivateSponsor'

      const querySnapshot =await getDocs(collection(db, 'PrivateSponsors'));
      const data = []

      querySnapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          ...doc.data(),
        })

        console.log(data)
        setVerificationData(data)
      })

      // db.collection(collectionName).get().then((querySnapshot) => {
      //   const dataArray = [];

      //   querySnapshot.forEach((doc) => {
      //     if(doc.exists) {
      //       const data = doc.data();
      //       dataArray.push(data);
      //     }
      //   })
      //   setVerificationData(dataArray)
      // })

    } catch (error) {
      console.error('Error fetching verification data:', error);
      setVerificationData([]);
    }
  }

  useEffect(() => {
    fetchVerificationData();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <p className="text-4xl px-10 pt-10">Verification for Sponsor Requests</p>

      <div className='flex items-center justify-around p-10 flex-wrap my-2'>
        {verificationData.map((data, key) => (
          <div key={key} className='my-3'>
            <VerificationCard
              donorId={data.id}
              requestId={data.financialNeed.incomeStatus}
              age={data.deadline.applicationDeadline}
              blood={data.enrollmentStatus.fullTimeRequirement}
              authStatus={data.auth}
            />
            {console.log(verificationData)}
          </div>
        ))}
      </div>

    </div>
  );
};

export default Verification;
 