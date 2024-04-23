import React from 'react';
import KhaltiCheckout from 'khalti-checkout-web';

const KhaltiPayment = ({totalprice}) => {

   


    

    // Configuration for Khalti checkout
    let config = {
        publicKey: "test_public_key_1e85e95ad4ec405b98fd4d1b23de4bef",
        productIdentity: "123",
        productName: "Dragon",
        productUrl: "http://gameofthrones.wikia.com/wiki/Dragons",
        paymentPreference: [
            "KHALTI",
            "EBANKING",
            "MOBILE_BANKING",
            "CONNECT_IPS",
            "SCT",
        ],
        eventHandler: {
            onSuccess(payload) {
             alert("payment successfully")
         
                
            },
            onError(error) {
                console.log(error);
            },
            onClose() {
                console.log('Widget is closing');
            }
        }
    };
    let checkout = new KhaltiCheckout(config);

    return (
        <div className='p-2'>
            <div className='text-center flex flex-col border-white/10 border p-2'>

                <div className='font-bold text-xl uppercase p-2'>
                    Online payment
                </div>
                <div className='w-full'>

                <button
    type="button"
    onClick={() => checkout.show({ amount: 10000 })}
    className='bg-orange-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full'
>
    Pay Via Khalti
</button>

                </div>
            </div>


        </div>
    )
}

export default KhaltiPayment;