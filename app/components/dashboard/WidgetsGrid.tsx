'use client'

import { IoCartOutline } from 'react-icons/io5';
import { SimpleWidget } from './SimpleWidget'
import { useAppSelector } from '@/app/store';

export const WidgetsGrid = () => {
    
    const isCart = useAppSelector(state => state.counter.count);
    
    return (
        <div className="flex flex-wrap justify-center p-2">
            <SimpleWidget
                title={`${isCart}`}
                subTitle="Added products"
                label="Counter"
                icon={<IoCartOutline size={50} className="text-blue-600" />}
                href="/dashboard/counter"

            />
        </div>
    )
};