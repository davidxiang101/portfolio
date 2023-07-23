import { ProjectProps } from '../components/utils/types';

export const projects: ProjectProps[] = [
    {
        name: 'TeeTaste',
        description: 'Developed a t-shirt recommendation engine based on head to head matchups of t-shirts',
        link: 'https://github.com/davidxiang101/TeeTaste',
        tags: ['Selenium', 'Pytorch', 'PostGres', 'NextJS', 'Tailwind']
    },
    {
        name: 'Bluetooth Location Tracking App',
        description: 'Designed and built a real-time location tracking app using Bluetooth Low Energy (BLE) technology. The app is capable of tracking and displaying the location of BLE devices in real time.',
        link: '',
        tags: ['Swift', 'SwiftUI', 'IoT']
    },
    {
        name: 'LiDAR Data Visualization',
        description: 'Created a comprehensive data visualization tool for interpreting LiDAR data. The tool features 3D visualization, easy navigation, and detailed analysis capabilities.',
        link: '',
        tags: ['Python', 'Pandas', 'Matplotlib', 'LiDAR']
    },
];
