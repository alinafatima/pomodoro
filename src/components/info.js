import React from 'react';
import Modal from './modal';

export const Info = ({ isOpen, closeModal }) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <section class="info-section">
        <h2>Get Started with the Pomodoro Technique:</h2>

        <h3>What is the Pomodoro Technique?</h3>
        <p>
          The Pomodoro Technique is a time management method developed by
          Francesco Cirillo in the late 1980s. It's a simple yet powerful
          technique that helps improve focus, productivity, and time management
          skills. The technique uses a timer to break work into focused
          intervals, known as "Pomodoros," followed by short breaks. This
          section will guide you on how to make the most of the Pomodoro
          Technique.
        </p>

        <h3>How to use the Pomodoro Technique:</h3>
        <ol>
          <li>
            <strong>Set a Goal:</strong> Identify the task or project you want
            to work on and set a clear goal for what you want to achieve during
            your Pomodoro sessions.
          </li>
          <li>
            <strong>Set the Timer:</strong> Start the Pomodoro timer for a fixed
            duration, typically 25 minutes. This is known as one Pomodoro
            session.
          </li>
          <li>
            <strong>Focus on the Task:</strong> During the Pomodoro session,
            fully concentrate on your work. Minimize distractions and immerse
            yourself in the task at hand.
          </li>
          <li>
            <strong>Avoid Interruptions:</strong> Try to avoid interruptions or
            multitasking during the Pomodoro session. If any new tasks or ideas
            come up, jot them down and address them later.
          </li>
          <li>
            <strong>Take a Short Break:</strong> Once the Pomodoro timer rings,
            take a short break of around 5 minutes. Use this time to relax,
            stretch, or do something enjoyable to recharge.
          </li>
          <li>
            <strong>Repeat the Cycle:</strong> After the break, start a new
            Pomodoro session and repeat the process. Every four Pomodoros, take
            a longer break of about 15-30 minutes to rejuvenate.
          </li>
        </ol>

        <h3>Benefits of the Pomodoro Technique:</h3>
        <ul>
          <li>
            <strong>Enhanced Focus:</strong> By working in focused bursts, the
            Pomodoro Technique helps improve concentration and reduces
            distractions, allowing you to accomplish more.
          </li>
          <li>
            <strong>Increased Productivity:</strong> Breaking your work into
            manageable intervals promotes productivity and helps overcome
            procrastination.
          </li>
          <li>
            <strong>Time Management:</strong> The Pomodoro Technique assists in
            estimating and allocating time for tasks more accurately, enabling
            better time management.
          </li>
          <li>
            <strong>Work-Life Balance:</strong> Regular breaks prevent burnout
            and provide opportunities to relax and maintain a healthy work-life
            balance.
          </li>
        </ul>
      </section>
    </Modal>
  );
};
