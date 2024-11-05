import React, { useState } from 'react';
import { Calendar, Clock, Users, Video, MapPin } from 'lucide-react';

interface TimeSlot {
  date: Date;
  available: boolean;
}

interface MeetingSchedulerProps {
  onSchedule: (meeting: any) => void;
  onClose: () => void;
}

export default function MeetingScheduler({ onSchedule, onClose }: MeetingSchedulerProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [meetingType, setMeetingType] = useState<'video' | 'in_person'>('video');

  const generateTimeSlots = (date: Date): string[] => {
    const slots = [];
    for (let hour = 9; hour <= 17; hour++) {
      slots.push(`${hour}:00`);
      slots.push(`${hour}:30`);
    }
    return slots;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-full max-w-2xl">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Schedule Meeting</h2>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-4 flex items-center">
                <Calendar size={16} className="mr-2" />
                Select Date
              </h3>
              <div className="border rounded-lg p-4">
                {/* Calendar Component would go here */}
                <input
                  type="date"
                  className="input-primary w-full"
                  onChange={(e) => setSelectedDate(new Date(e.target.value))}
                />
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-4 flex items-center">
                <Clock size={16} className="mr-2" />
                Select Time
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {selectedDate &&
                  generateTimeSlots(selectedDate).map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 text-sm rounded ${
                        selectedTime === time
                          ? 'bg-blue-100 text-blue-700'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-medium mb-4 flex items-center">
              <Users size={16} className="mr-2" />
              Meeting Type
            </h3>
            <div className="flex space-x-4">
              <button
                onClick={() => setMeetingType('video')}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  meetingType === 'video'
                    ? 'bg-blue-100 text-blue-700'
                    : 'border hover:bg-gray-50'
                }`}
              >
                <Video size={16} className="mr-2" />
                Video Call
              </button>
              <button
                onClick={() => setMeetingType('in_person')}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  meetingType === 'in_person'
                    ? 'bg-blue-100 text-blue-700'
                    : 'border hover:bg-gray-50'
                }`}
              >
                <MapPin size={16} className="mr-2" />
                In Person
              </button>
            </div>
          </div>

          <div className="mt-6">
            <textarea
              placeholder="Meeting agenda and notes..."
              className="input-primary w-full"
              rows={3}
            />
          </div>

          <div className="mt-6 flex justify-end space-x-3">
            <button onClick={onClose} className="btn-secondary">
              Cancel
            </button>
            <button
              onClick={() => {
                onSchedule({
                  date: selectedDate,
                  time: selectedTime,
                  type: meetingType,
                });
              }}
              className="btn-primary"
              disabled={!selectedDate || !selectedTime}
            >
              Schedule Meeting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}