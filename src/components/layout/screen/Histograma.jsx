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
            <nav className="bg-blue-900 w-full p-4 flex justify-between items-center" style={{ background: "#072D44" }}>
                <div className="flex items-center">
                    <img src={Imagen} alt="Logo" className="h-12 w-auto mr-4" />
                    <h1 className="text-white font-bold text-lg">SIMNA</h1>
                </div>

                <div className="flex items-center">
                    <button className="text-white focus:outline-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </nav>

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
