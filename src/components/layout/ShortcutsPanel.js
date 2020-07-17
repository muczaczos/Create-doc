import React from 'react';
import CustomButton from './CustomButton';

const ShortcutsPanel = () => {
  return (
    <div className="spanel">
      <div className="customers center">
        <h5>Customers</h5>
        <div className="selement">
          <CustomButton text="Cerozfrucht" />
          <CustomButton text="Czamar Trans" />
          <CustomButton text="Lukpol" />
          <CustomButton text="Vegapol" />
          <CustomButton text="Golden Sad" />
          <CustomButton text="Roxa" />
          <CustomButton text="Amafrut" />
          <CustomButton text="Freshapple" />
          <CustomButton text="Kacprowicz" />
          <CustomButton text="Agrostar" />
        </div>
      </div>
      <div className="reiepients  center">
        <h5>Reciepients</h5>
        <div className="selement">
          <CustomButton text="Nehvizdy" />
          <CustomButton text="Velka Bystrica" />
          <CustomButton text="Senec" />
          <CustomButton text="Paczyński" />
          <CustomButton text="Nowocin" />
          <CustomButton text="Agro S.C" />
          <CustomButton text="Leszek" />
          <CustomButton text="Loděnice " />
          <CustomButton text="Hrazdílek" />
          <CustomButton text="Tkaczyk M." />
        </div>
      </div>
      <div className="products">
        <h5 className="center">Products</h5>
        <div className="selement">
          <CustomButton text="Klejony 14kg" />
          <CustomButton text="Klejony 10kg" />
          <CustomButton text="Klejony 7kg" />
          <CustomButton text="klejony 6kg" />
          <CustomButton text="klejony 3kg" />
          <CustomButton text="Tacka 165 Lidl" />
          <CustomButton text="Tacka 165 cza" />
          <CustomButton text="Tacka 260 cza" />
          <CustomButton text="Tacka 240 cza" />
          <CustomButton text="Tacka 220 Al" />
          <CustomButton text="Tacka 260 Al" />
          <CustomButton text="4314 czarny" />
          <CustomButton text="4314 Lidl CZ" />
          <CustomButton text="6470 zielony" />
          <CustomButton text="6470 czarny" />
          <CustomButton text="6411 czarny" />
          <CustomButton text="6411 Lidl CZ" />
          <CustomButton text="4385 czarny" />
        </div>
      </div>
    </div>
  );
};

export default ShortcutsPanel;
