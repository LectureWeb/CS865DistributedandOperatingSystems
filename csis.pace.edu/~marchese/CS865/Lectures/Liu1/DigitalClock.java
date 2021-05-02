//Sample Digital Clock Program showing two threads 
import java.awt.*; 
import java.util.Calendar; 
import java.applet.*; 

public class DigitalClock extends Applet implements Runnable{ 
  
 Thread clockThread1 = null, clockThread2 = null; 
 Font font = new Font("Courier", Font.BOLD, 48); 
 Color color = Color.green; 
  
 public void start(){ 
  if (clockThread1 == null){ 
   clockThread1 = new Thread(this); 
   clockThread1.start(); 
  } 
  if (clockThread2 == null){ 
   clockThread2 = new Thread(this); 
   clockThread2.start(); 
  } 

 } 
  
 public void stop(){ 
  clockThread1 = null; 
  clockThread2 = null; 
 } 
  
 public void run(){ 
  while(Thread.currentThread() == clockThread1){ 
   color = Color.green; 
   repaint(); 
   try{ 
    Thread.currentThread().sleep(1000); 
   } catch (InterruptedException e){} 
  } 
  
  while(Thread.currentThread() == clockThread2){ 
   color = Color.blue; 
   repaint(); 
   try{ 
    Thread.currentThread().sleep(1500); 
   } catch (InterruptedException e){} 
  } 

 } 
  
 public void paint(Graphics g){ 
  Calendar calendar = Calendar.getInstance(); 
  int hour = calendar.get(Calendar.HOUR_OF_DAY); 
  int minute =calendar.get(Calendar.MINUTE); 
  int second =calendar.get(Calendar.SECOND); 
  
  g.setFont(font); 
  g.setColor(color); 
  g.drawString(hour + ":"+minute/10+minute%10+ 
            ":"+second/10+second%10, 10,60); 

 } 
} 

