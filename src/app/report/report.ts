import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report.html',
  styleUrl: './report.css'
})
export class Report implements AfterViewInit {
  summaryData = [
    { category: 'Category A', value: 120 },
    { category: 'Category B', value: 90 },
    { category: 'Category C', value: 150 },
    { category: 'Category D', value: 70 }
  ];

  ngAfterViewInit(): void {
    const canvas = document.getElementById('pieChart') as HTMLCanvasElement;
    if (!canvas) {
      console.error('Canvas not found!');
      return;
    }

    new Chart(canvas, {
      type: 'pie',
      data: {
        labels: this.summaryData.map(item => item.category),
        datasets: [{
          label: 'Summary',
          data: this.summaryData.map(item => item.value),
          backgroundColor: ['#4dc9f6','#f67019','#f53794','#537bc4'],
          borderWidth: 1
        }]
      }
    });
  }
}
