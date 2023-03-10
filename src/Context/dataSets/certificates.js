import dciCert from '../../images/DCI-web-dev-cert.2021.png'
import ccpCert from '../../images/CCPCert.png'

export const certificates=[
    {
        name: 'CCP',
        institution:'Digital Career Institute (DCI)',
        certifyingBody:'Amazon Web Services (AWS)',
        startDate:new Date('28.10.2022'),
        endDate:new Date('06.03.2023'),
        issueDate: new Date('07.03.2023'), 
        expiration:new Date('07.03.2026'),
        duration: 3,
        image:ccpCert,
        verificationLink: 'https://www.credly.com/badges/d222fbd0-92f6-4a4a-85ed-db5a672c2146/public_url'
    },
    {
        name: 'Weiterbildung zum/zur Web- und Softwareentwickler/in',
        institution:'DCI (Digital Career Institute)',
        certifyingBody:'DCI (Digital Career Institute)',
        startDate:new Date('03.08.2020'),
        endDate:new Date('03.09.2021'),
        issueDate: new Date('27.09.2021'), 
        expiration:new Date(''),
        duration: 12,
        image:dciCert,

    },
    
]