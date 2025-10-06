import React, { use } from 'react';
import Cousin from './Cousin';
import { MoneyContext } from './FamilyTree';

const Aunt = ({asset}) => {




    const [money, setMoney] = use(MoneyContext);


    const handleAddMoney = () => {
        setMoney(money + 5000);
    }
    return (
        <div>
            <h2>Aunt</h2>
            <section className='flex'>
                <Cousin name="Emily" asset={asset} />
                <Cousin name="Ella" />
                <button onClick={handleAddMoney}>Add 5000 taka</button>
            </section>
        </div>
    );
};

export default Aunt;