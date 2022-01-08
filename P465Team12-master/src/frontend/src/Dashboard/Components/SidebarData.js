import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GrIcons from 'react-icons/md';


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: < AiIcons.AiFillHome /> ,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: './About',
        icon: < AiIcons.AiTwotoneBook /> ,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/Login',
        icon: < AiIcons.AiFillHome /> ,
        cName: 'nav-text'
    },

    {
        title: 'Register',
        path: '/Register',
        icon: < AiIcons.AiFillHome /> ,
        cName: 'nav-text'
    },
    {
        title: 'Announcements',
        path: './Announcements',
        icon: < GrIcons.MdAnnouncement /> ,
        cName: 'nav-text'
    },
    {
        title: 'Calendar',
        path: './Calendar',
        icon: < AiIcons.AiFillCalendar /> ,
        cName: 'nav-text'
    },
    {
        title: 'Courses',
        path: './Courses',
        icon: < AiIcons.AiTwotoneBook /> ,
        cName: 'nav-text'
    },
    {
        title: 'Users',
        path: './User',
        icon: < AiIcons.AiTwotoneBook /> ,
        cName: 'nav-text'
    },
    {
        title: 'Instructors',
        path: './Instructors',
        icon: < AiIcons.AiTwotoneBook /> ,
        cName: 'nav-text'
    },
    {
        title: 'Grades',
        path: './Grades',
        icon: < AiIcons.AiTwotoneBook /> ,
        cName: 'nav-text'
    },
]