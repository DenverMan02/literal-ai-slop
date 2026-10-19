import React, { useState } from 'react';
import { PlayerProfile } from '../../types/game';
import { StorageService } from '../../services/storage';
import { Cloud, Save, Download, Copy, Check, X, Shield } from 'lucide-react';

interface CloudSaveModalProps {
  profile: PlayerProfile;
  isOpen: boolean;
  onClose: () => void;
  onProfileUpdated: (profile: PlayerProfile) => void;
}

export const CloudSaveModal: React.FC<CloudSaveModalProps> = ({
  profile,
  isOpen,
  onClose,
  onProfileUpdated,
}) => {
  const [commanderName, setCommanderName] = useState(profile.name);
  const [cloudSlots, setCloudSlots] = useState(StorageService.getCloudSlots());
  const [importString, setImportString] = useState('');
  const [copied, setCopied] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSaveName = () => {
    if (!commanderName.trim()) return;
    const updated = { ...profile, name: commanderName.trim() };
    StorageService.saveProfile(updated);
    onProfileUpdated(updated);
    setFeedbackMsg('Commander designation updated');
    setTimeout(() => setFeedbackMsg(null), 2500);
  };

  const handleSaveToSlot = (slotIndex: number) => {
    StorageService.saveToCloudSlot(slotIndex, profile);
    setCloudSlots(StorageService.getCloudSlots());
    setFeedbackMsg(`Profile synchronized to Cloud Slot ${slotIndex}`);
    setTimeout(() => setFeedbackMsg(null), 2500);
  };

  const handleCopyExport = () => {
    const code = StorageService.exportSave();
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleImport = () => {
    if (!importString.trim()) return;
    const imported = StorageService.importSave(importString.trim());
    if (imported) {
      onProfileUpdated(imported);
      setCommanderName(imported.name);
      setFeedbackMsg('Save code imported successfully');
      setImportString('');
      setTimeout(() => setFeedbackMsg(null), 2500);
    } else {
      setFeedbackMsg('Invalid save code data');
      setTimeout(() => setFeedbackMsg(null), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-xl p-6 shadow-2xl flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2.5">
            <Cloud className="w-5 h-5 text-emerald-400" />
            <h2 className="text-lg font-bold text-white">
              Cloud Save & Commander Profile
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Feedback message */}
        {feedbackMsg && (
          <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-800 text-xs font-semibold text-emerald-300 text-center">
            {feedbackMsg}
          </div>
        )}

        {/* Commander Name Form */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold text-slate-300">
            Commander Designation
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={commanderName}
              onChange={(e) => setCommanderName(e.target.value)}
              maxLength={20}
              className="flex-1 px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-emerald-500 font-medium"
            />
            <button
              type="button"
              onClick={handleSaveName}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white rounded-lg border border-slate-700 transition-colors"
            >
              Update
            </button>
          </div>
        </div>

        {/* Cloud Slots */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold text-slate-300">
            Cloud Profile Slots
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {cloudSlots.map((slot) => (
              <div
                key={slot.slot}
                className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex flex-col justify-between gap-3 text-xs"
              >
                <div>
                  <span className="font-bold text-slate-200 block truncate">
                    {slot.name}
                  </span>
                  <span className="text-[11px] font-mono text-amber-400 block mt-0.5">
                    {slot.trophies} Trophies
                  </span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">
                    {slot.date}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleSaveToSlot(slot.slot)}
                  className="w-full py-1.5 bg-emerald-950/50 hover:bg-emerald-900/60 border border-emerald-800/80 rounded-md text-[11px] font-semibold text-emerald-300 transition-colors flex items-center justify-center gap-1"
                >
                  <Save className="w-3 h-3" />
                  <span>Sync Here</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Export / Import Section */}
        <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
          <span className="text-xs font-semibold text-slate-300">
            Backup Code (Cross-Device Sync)
          </span>
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              type="button"
              onClick={handleCopyExport}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-xs font-semibold text-slate-200 flex items-center justify-center gap-2 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Code Copied' : 'Copy Save Code'}</span>
            </button>

            <div className="flex-1 flex gap-2">
              <input
                type="text"
                placeholder="Paste backup code..."
                value={importString}
                onChange={(e) => setImportString(e.target.value)}
                className="flex-1 px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-emerald-500 font-mono"
              />
              <button
                type="button"
                onClick={handleImport}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-xs font-semibold text-slate-200 flex items-center gap-1"
              >
                <Download className="w-3 h-3" />
                <span>Import</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
