import { useEffect, useState } from "react";

const useBuyer = email => {
    const [isBuyer, setIsBuyer] = useState('');
    const [isBuyerLoading, setIsBuyerLoadnig] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://assignment-twelve-server-six.vercel.app/users/buyer/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsBuyer(data.isBuyer);
                    setIsBuyerLoadnig(false);
                })
        }
    }, [email]);
    return [isBuyer, isBuyerLoading];
}

export default useBuyer;