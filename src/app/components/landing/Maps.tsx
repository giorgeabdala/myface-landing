import React from 'react';

interface MapsProps {
    className?: string;
}

export default function Maps(props: MapsProps){
    return (
        <div className="h-full">
            <iframe className={props.className}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.017926357503!2d-49.208047823632015!3d-25.404210531873627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce5f5d30da5b7%3A0xce15c12d99ac100f!2sR.%20Rio%20Xingu%2C%20625%20-%20Bairro%20Alto%2C%20Curitiba%20-%20PR%2C%2082840-300!5e0!3m2!1spt-BR!2sbr!4v1690573215215!5m2!1spt-BR!2sbr"
                width="500"
                height="350"
                style={{ border: '0' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
            ></iframe>

    <div className="flex flex-col justify-center flex-shrink-0 hidden">
        <span>Rua Rio Xingu, 625, sobrado 8</span>
        <span>Bairro Alto - 82840-300</span>
        <span>Curitiba - PR</span>
    </div>
        </div>
    );
};


