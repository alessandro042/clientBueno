import React, { useEffect, useState, useRef } from 'react';
import { Button } from 'flowbite-react';
import Chart from 'chart.js/auto';
import Imagen from '../../../assets/logo.png';
import { Link } from 'react-router-dom';

const Histograma = () => {
    const [chartLoaded, setChartLoaded] = useState(false);
    const chartRef = useRef(null); // Referencia al gráfico

    useEffect(() => {
        const initializeChart = () => {
            const data = {
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
                datasets: [{
                    label: 'Consumo',
                    data: [65, 59, 80, 81, 0, 0],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            };

            const config = {
                type: 'bar',
                data: data,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            };

            const ctx = document.getElementById('histogramaChart');
            if (ctx) {
                // Destruir gráfico existente si existe
                if (chartRef.current !== null) {
                    chartRef.current.destroy();
                }
                // Crear nuevo gráfico
                chartRef.current = new Chart(ctx, config);
                setChartLoaded(true);
            }
        };

        initializeChart();
        
        // Cleanup: Destruir el gráfico al desmontar el componente
        return () => {
            if (chartRef.current !== null) {
                chartRef.current.destroy();
            }
        };
    }, []);

    return (
        <div>

            <div className="chart-container" style={{ position: 'relative', height: '400px', width: '600px', margin: 'auto' }}>
                <canvas id="histogramaChart"></canvas>
            </div>

            {chartLoaded && <div className="flex justify-center mt-4"><Button style={{ background: "#5790AB" }} className='shadow btn-sm'>
                <Link to="/pozos">Volver a Consulta General</Link>
                </Button></div>}
        </div>
    );
}

export default Histograma;
