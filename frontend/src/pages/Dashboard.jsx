import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { Plus, Trash2, CheckCircle, Circle, Search, Filter, Moon, Sun, LogOut, Calendar, Clock } from 'lucide-react';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [isLoading, setIsLoading] = useState(true);

  const { user, logout } = useAuth();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/tasks`);
      setTasks(response.data);
    } catch (err) {
      console.error('Error fetching tasks', err);
    } finally {
      setIsLoading(false);
    }
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (!title || !description) return;

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/tasks`, {
        title,
        description,
        dueDate,
      });
      setTasks([response.data, ...tasks]);
      setTitle('');
      setDescription('');
      setDueDate('');
    } catch (err) {
      console.error('Error adding task', err);
    }
  };

  const toggleTaskStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 'pending' ? 'completed' : 'pending';
    try {
      const response = await axios.put(`${import.meta.env.VITE_API_URL}/tasks/${id}`, {
        status: newStatus,
      });
      setTasks(tasks.map((t) => (t._id === id ? response.data : t)));
    } catch (err) {
      console.error('Error updating task', err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/tasks/${id}`);
      setTasks(tasks.filter((t) => t._id !== id));
    } catch (err) {
      console.error('Error deleting task', err);
    }
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          task.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || task.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="fade-in">
      <nav className="navbar">
        <div className="logo">SmartTask AI</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <button 
            className="btn" 
            style={{ padding: '0.5rem', background: 'var(--glass-bg)', color: 'var(--text-main)' }}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>{user.name}</span>
            <button className="btn btn-danger" style={{ padding: '0.5rem' }} onClick={logout}>
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </nav>

      <main className="container">
        <header style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Good day, {user.name.split(' ')[0]}!</h1>
          <p style={{ color: 'var(--text-muted)' }}>You have {tasks.filter(t => t.status === 'pending').length} tasks pending.</p>
        </header>

        <div className="dashboard-grid">
          {/* Sidebar - Add Task Form */}
          <aside>
            <div className="glass-card" style={{ padding: '2rem', position: 'sticky', top: '6rem' }}>
              <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Plus size={20} color="var(--primary-color)" /> New Task
              </h2>
              <form onSubmit={addTask}>
                <div className="form-group">
                  <label>Title</label>
                  <input 
                    type="text" 
                    className="input-field" 
                    placeholder="Task title..." 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Description (Note)</label>
                  <textarea 
                    className="input-field" 
                    placeholder="Detail your task or note here..." 
                    rows="4"
                    style={{ resize: 'none' }}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <label>Due Date</label>
                  <input 
                    type="date" 
                    className="input-field" 
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                  Add Task
                </button>
              </form>
            </div>
          </aside>

          {/* Main Content - Task List */}
          <section>
            <div style={{ marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ position: 'relative', flex: '1', minWidth: '300px' }}>
                <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input 
                  type="text" 
                  className="input-field" 
                  placeholder="Search tasks or notes..." 
                  style={{ paddingLeft: '3rem' }}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button 
                  className={`btn ${filterStatus === 'all' ? 'btn-primary' : 'glass-card'}`}
                  style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
                  onClick={() => setFilterStatus('all')}
                >
                  All
                </button>
                <button 
                  className={`btn ${filterStatus === 'pending' ? 'btn-primary' : 'glass-card'}`}
                  style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
                  onClick={() => setFilterStatus('pending')}
                >
                  Pending
                </button>
                <button 
                  className={`btn ${filterStatus === 'completed' ? 'btn-primary' : 'glass-card'}`}
                  style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
                  onClick={() => setFilterStatus('completed')}
                >
                  Completed
                </button>
              </div>
            </div>

            {isLoading ? (
              <div style={{ textAlign: 'center', padding: '4rem' }}>
                <p style={{ color: 'var(--text-muted)' }}>Loading tasks...</p>
              </div>
            ) : filteredTasks.length === 0 ? (
              <div className="glass-card" style={{ padding: '4rem', textAlign: 'center' }}>
                <p style={{ color: 'var(--text-muted)' }}>No tasks found. Start by adding one!</p>
              </div>
            ) : (
              <div className="task-list">
                {filteredTasks.map((task) => (
                  <div key={task._id} className="glass-card task-card">
                    <div style={{ display: 'flex', gap: '1rem', flex: '1' }}>
                      <button 
                        style={{ background: 'none', border: 'none', cursor: 'pointer', color: task.status === 'completed' ? 'var(--success)' : 'var(--text-muted)', paddingTop: '0.25rem' }}
                        onClick={() => toggleTaskStatus(task._id, task.status)}
                      >
                        {task.status === 'completed' ? <CheckCircle size={24} /> : <Circle size={24} />}
                      </button>
                      <div className="task-info">
                        <h3 style={{ textDecoration: task.status === 'completed' ? 'line-through' : 'none', color: task.status === 'completed' ? 'var(--text-muted)' : 'var(--text-main)' }}>
                          {task.title}
                        </h3>
                        <p style={{ marginBottom: '0.75rem' }}>{task.description}</p>
                        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                          {task.dueDate && (
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                              <Calendar size={14} /> {new Date(task.dueDate).toLocaleDateString()}
                            </span>
                          )}
                          <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            <Clock size={14} /> Created {new Date(task.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1rem' }}>
                      <span className={`task-status status-${task.status}`}>
                        {task.status}
                      </span>
                      <button 
                        className="btn" 
                        style={{ padding: '0.5rem', color: 'var(--danger)', background: 'rgba(239, 68, 68, 0.1)' }}
                        onClick={() => deleteTask(task._id)}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
