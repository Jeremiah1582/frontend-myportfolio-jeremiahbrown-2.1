import dciCert from '../../images/DCI-web-dev-cert.2021.png'
import ccpCert from '../../images/CCPCert.png'
import reStartCert from '../../images/re-start-programBadge.png'

export const certificates=[
    {
        name: 'CCP',
        institution:'Digital Career Institute (DCI)',
        issuedBy:'Amazon Web Services Training and Certification',
        startDate:new Date('28.10.2022'),
        endDate:new Date('06.03.2023'),
        issueDate: new Date('07.03.2023'), 
        expiration:new Date('07.03.2026'),
        duration: 4,
        image:ccpCert,
        verificationLink: 'https://www.credly.com/badges/d222fbd0-92f6-4a4a-85ed-db5a672c2146/public_url'
    },  
    {
        name: 'AWS re/Start Graduate',
        institution:'Amazon Web Services Training and Certification',
        issuedBy:'Amazon Web Services (AWS)',
        startDate:new Date('28.10.2022'),
        endDate:new Date('06.03.2023'),
        issueDate: new Date('10.03.2023'), 
        expiration:new Date(''),
        duration: 4,
        image:reStartCert,
        verificationLink:'https://www.credly.com/badges/ad48729f-2337-45a0-80e1-32e180bd0f6d/public_url',

    },
    {
        name: 'Weiterbildung zum/zur Web- und Softwareentwickler/in',
        institution:'DCI (Digital Career Institute)',
        issuedBy:'DCI (Digital Career Institute)',
        startDate:new Date('03.08.2020'),
        endDate:new Date('03.09.2021'),
        issueDate: new Date('27.09.2021'), 
        expiration:new Date(''),
        duration: 12,
        image:dciCert,

    },

    
]