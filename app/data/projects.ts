import { ProjectProps } from '../components/utils/types';

export const projects: ProjectProps[] = [
    {
        name: 'TeeTaste',
        description: 'Developed a t-shirt recommendation engine based on head to head matchups of t-shirts',
        link: 'https://github.com/davidxiang101/TeeTaste',
        tags: ['Pytorch', 'Django', 'NextJS', 'Tailwind']
    },
    {
        name: 'Bluetooth Location Tracking App',
        description: 'Designed and built a real-time location tracking app using Bluetooth Low Energy (BLE) technology. The app is capable of tracking and displaying the location of BLE devices in real time.',
        link: 'https://github.com/davidxiang101/totemv0',
        tags: ['Swift', 'SwiftUI', 'IoT']
    },
    {
        name: 'F1/10 Autonomous Race Car',
        description: 'One first in the F1/10 competition at the University of Virginia. Developed a ROS-based autonomous 1/10th scale race car that uses LiDAR and camera data to race through a track.',
        link: 'https://github.com/davidxiang101/race_ws',
        tags: ['Python', 'ROS', 'LiDAR']
    },
];
