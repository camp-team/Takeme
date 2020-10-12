import * as Twitter from 'twitter';
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const db = admin.firestore();

export const tweet = functions
  .region('asia-northeast1')
  .https.onCall(async (data, context) => {
    const twitterData = (
      await db.doc(`users/${data.uid}/private/twitter`).get()
    ).data();

    const twitterClient = new Twitter({
      consumer_key: '<QhWrkg5M6no8cN6T3fAd0FbLj>',
      consumer_secret: '<igL6LvJw4geVJhfh8WjooYKSBUqaxaZqNcBYx0VwEuLxJLIIh1>',
      access_token_key: '<1286498431163183109-lABOGP4CAikMisUO1lE3Husdf5usdq>',
      access_token_secret: '<iRv4amWåXsTo4jymxNLulADd0pWU4wZZnhkWYPL6TfTDNz>',
    });

    if (twitterData) {
      await twitterClient.post('statuses/update', {});

      const twitterProfile = await twitterClient.get('users/show', {
        user_id: '@asung_kim',
      });

      console.log(twitterProfile);

      return true;
    } else {
      throw new Error('認証に失敗しました');
    }
  });
