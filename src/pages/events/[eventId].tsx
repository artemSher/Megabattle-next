import { useRouter } from 'next/router';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import EventHeroSection from '@/components/sections/EventHeroSection';
import TeamMember from '@/components/ui/TeamMember';
import ContactsSection from '@/components/sections/ContactsSection';
import styles from '@/styles/EventPage.module.css';

// Placeholder data - replace with actual data fetching later
const getEventData = (eventId: string | string[] | undefined) => {
  if (!eventId || typeof eventId !== 'string') return null;
  // In a real app, fetch data from an API based on eventId
  return {
    id: eventId,
    title: `Мероприятие ${eventId}`,
    description: 'Подробное описание мероприятия. Здесь будет много интересного текста о том, что ждет участников.',
    date: '2025-10-15',
    time: '14:00',
    address: 'ул. Ломоносова, д.9, Санкт-Петербург',
    image: '/assets/events/event-hero.jpg', // Placeholder image
    organizers: [
      { id: '1', name: 'Иван Иванов', role: 'Главный организатор', image: '/assets/team-placeholder.jpg' },
      { id: '2', name: 'Мария Петрова', role: 'Координатор', image: '/assets/team-placeholder.jpg' },
    ],
    mapCoordinates: { lat: 59.956909, lng: 30.307466 } // Example coordinates
  };
};

const EventPage: React.FC = () => {
  const router = useRouter();
  const { eventId } = router.query;

  // Fetch event data based on eventId from URL
  const event = getEventData(eventId);

  if (!event) {
    // Handle case where event data is not found or still loading
    // You might want to show a loading indicator or a 404 page
    return <div className={styles.container}>Загрузка данных мероприятия...</div>; 
  }

  return (
    <>
      <Head>
        <title>{event.title} - ITMO.MEGABATTLE</title>
        <meta name="description" content={`Узнайте больше о мероприятии ${event.title}`} />
      </Head>
      
      <main>
        <EventHeroSection title={event.title} image={event.image} />
        
        <div className={styles.container}>
          <Link href="/" className={styles.backButton}>
            ← На главную
          </Link>

          <section className={styles.eventDetails}>
            <h2>О мероприятии</h2>
            <p><strong>Дата:</strong> {new Date(event.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            <p><strong>Время:</strong> {event.time}</p>
            <p><strong>Адрес:</strong> {event.address}</p>
            <p>{event.description}</p>
          </section>

          <section className={styles.organizersSection}>
            <h2>Ответственные</h2>
            <div className={styles.organizersGrid}>
              {event.organizers.map(org => (
                <TeamMember 
                  key={org.id}
                  id={Number(org.id)}
                  name={org.name}
                  role={org.role}
                  image={org.image}
                  onClick={() => {}}
                />
              ))}
            </div>
          </section>
        </div>

        <ContactsSection />
      </main>
    </>
  );
};

export default EventPage;
